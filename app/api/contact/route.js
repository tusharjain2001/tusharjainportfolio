import { profile } from "@/lib/data";

/**
 * Receives the "Let's talk" form and emails it to me through Resend's REST
 * API — a plain fetch, so there's no SDK dependency to keep updated.
 *
 * Needs RESEND_API_KEY (Vercel → Settings → Environment Variables). Sending
 * from onboarding@resend.dev works without verifying a domain, with one
 * catch: Resend only delivers it to the address the Resend account was
 * created with. CONTACT_TO overrides the recipient if that ever differs.
 */

const TOPICS = new Set([
  "Freelance project",
  "Full-time role",
  "Something else",
]);

const LIMITS = { name: 100, email: 200, message: 3000 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escape = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );

const fail = (error, status = 400) => Response.json({ error }, { status });

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return fail("Couldn't read the form.");
  }

  // Honeypot: a field real visitors never see. Bots fill every input, so
  // anything here is silently "accepted" and dropped.
  if (body.website) return Response.json({ ok: true });

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const topic = TOPICS.has(body.topic) ? body.topic : "Something else";

  if (!name || !email || !message) return fail("Please fill in every field.");
  if (!EMAIL.test(email)) return fail("That email address doesn't look right.");
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return fail("That's a bit long — could you trim it down?");
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[contact] RESEND_API_KEY is not set");
    return fail("The form isn't set up yet.", 503);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || profile.email],
      // so hitting Reply in the inbox goes straight back to the sender
      reply_to: email,
      subject: `${topic} — ${name}`,
      text: `${name} <${email}>\nTopic: ${topic}\n\n${message}`,
      html: `
        <p><strong>${escape(name)}</strong> &lt;${escape(email)}&gt;<br/>
        Topic: ${escape(topic)}</p>
        <p style="white-space:pre-wrap">${escape(message)}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend responded", res.status, await res.text());
    return fail("Something went wrong sending that.", 502);
  }

  return Response.json({ ok: true });
}
