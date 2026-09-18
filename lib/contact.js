/**
 * Opens the "Let's talk" form from anywhere. A window event rather than
 * context, so a button deep in any section can trigger it without threading a
 * provider through the server-rendered page.
 */
export const CONTACT_EVENT = "contact:open";

export function openContact() {
  window.dispatchEvent(new Event(CONTACT_EVENT));
}
