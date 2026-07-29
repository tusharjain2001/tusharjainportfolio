"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * A single soft-lit ceramic form. No wireframes, no emissive glow, no orbit
 * rings — the whole read comes from the lighting, so it looks photographed
 * rather than drawn.
 */
function Form({ reduced }) {
  const mesh = useRef(null);
  const material = useRef(null);
  const shell = useRef(null);

  // Cursor speed feeds the surface distortion, so the form reacts to how you
  // move rather than just where the pointer is.
  const energy = useRef(0);
  const prevPointer = useRef(new THREE.Vector2());

  useFrame((state, delta) => {
    const d = Math.min(delta, 0.1);
    const { pointer, clock } = state;

    const speed = pointer.distanceTo(prevPointer.current) / (d || 0.016);
    prevPointer.current.copy(pointer);
    energy.current = THREE.MathUtils.damp(
      energy.current,
      Math.min(speed * 0.22, 1),
      3,
      d
    );

    if (material.current && !reduced) {
      material.current.distort = 0.38 + energy.current * 0.22;
    }

    if (mesh.current) {
      const t = clock.elapsedTime;
      // idle breathing keeps the form alive when the cursor is still
      const breathe = 1 + Math.sin(t * 0.55) * 0.022;
      mesh.current.scale.setScalar(breathe);
      mesh.current.position.y = Math.sin(t * 0.42) * 0.12;
      mesh.current.rotation.y += d * 0.09;
    }

    if (shell.current) {
      shell.current.rotation.y -= d * 0.06;
      shell.current.rotation.z += d * 0.03;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.5, 128, 128]} />
        <MeshDistortMaterial
          ref={material}
          /* warm clay — the amber comes from the key light, not the material */
          color="#7a5a41"
          roughness={0.36}
          metalness={0.1}
          distort={reduced ? 0.24 : 0.38}
          speed={reduced ? 0 : 1.05}
        />
      </mesh>

      {/* thin counter-rotating arc: one crisp line against all that softness */}
      <mesh ref={shell} rotation={[Math.PI / 2.6, 0.3, 0]}>
        <torusGeometry args={[2.35, 0.006, 8, 128]} />
        <meshBasicMaterial color="#e0803a" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

/** Damped pointer parallax — slow enough to feel weighted, not twitchy. */
function ParallaxRig({ children, reduced }) {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current || reduced) return;
    const d = Math.min(delta, 0.1);
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      x * 0.3,
      2,
      d
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -y * 0.2,
      2,
      d
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      x * 0.22,
      2,
      d
    );
  });

  return <group ref={group}>{children}</group>;
}

export default function HeroScene({ active = true, reduced = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      {/* low warm ambient so shadow sides stay brown, never grey */}
      <ambientLight intensity={0.7} color="#9a7856" />

      {/* key: warm and high, carves the amber highlight */}
      <directionalLight position={[4, 5, 3.5]} intensity={4.2} color="#ffd2a0" />

      {/* rim: cool bone raking the left edge, separates form from background */}
      <directionalLight
        position={[-6, 2, -1.5]}
        intensity={3.6}
        color="#f2ede3"
      />

      {/* ember kicker along the lower-right edge, kept off the surface */}
      <directionalLight
        position={[3.5, -3, -2]}
        intensity={2.2}
        color="#c25a2e"
      />

      <ParallaxRig reduced={reduced}>
        <Form reduced={reduced} />
      </ParallaxRig>

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.5}
        scale={11}
        blur={3.2}
        far={4.5}
        color="#000000"
        frames={reduced ? 1 : Infinity}
      />
    </Canvas>
  );
}
