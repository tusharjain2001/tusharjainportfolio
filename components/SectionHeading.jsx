"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function SectionHeading({ index, title, accent, subtitle }) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: EASE }}
        className="rule origin-left"
      />

      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="eyebrow"
          >
            {index}
          </motion.p>

          <h2 className="display mt-3 text-[clamp(2.25rem,5.5vw,4.25rem)] text-bone">
            {/*
              The viewport trigger lives on the *clipping* wrapper, not the
              sliding child. The child starts translated fully outside that
              wrapper, so an observer attached to it would never report as
              intersecting and the reveal would never fire.
            */}
            <motion.span
              className="mask-line"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span
                variants={{ hidden: { y: "140%" }, visible: { y: 0 } }}
                transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
                className="block"
              >
                {title} {accent && <em className="text-amber">{accent}</em>}
              </motion.span>
            </motion.span>
          </h2>
        </div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="pretty max-w-sm text-sm leading-relaxed text-sand md:text-right"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
