import { profile } from "@/lib/data";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${profile.siteUrl}/sitemap.xml`,
    host: profile.siteUrl,
  };
}
