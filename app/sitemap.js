import { profile } from "@/lib/data";

/**
 * One page, so this is a one-entry sitemap. It still earns its keep: it hands
 * Google a canonical origin and a lastModified, which a single-page site has
 * no other way to signal. The in-page anchors (#about, #projects) are
 * deliberately absent — fragments aren't separate URLs and listing them just
 * adds noise.
 */
export default function sitemap() {
  return [
    {
      url: profile.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
