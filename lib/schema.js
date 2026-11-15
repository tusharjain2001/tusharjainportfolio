import { experience, profile, projects, skills } from "./data";

/**
 * JSON-LD for the page. Everything here is derived from `data.js` rather than
 * restated, so the markup search engines read can't drift from the markup
 * people read — the usual failure mode with hand-written structured data.
 *
 * Emitted as one @graph with @id cross-references instead of three separate
 * script tags, which is what lets the ProfilePage point at the Person rather
 * than describing them twice.
 */

const PERSON_ID = `${profile.siteUrl}/#person`;
const PAGE_ID = `${profile.siteUrl}/#page`;

// "Bahadurgarh, Haryana, India" -> the three PostalAddress fields
const [locality, region, country] = profile.location
  .split(",")
  .map((part) => part.trim());

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: profile.name,
  givenName: profile.firstName,
  familyName: profile.lastName,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/opengraph-image.png`,
  jobTitle: "Frontend Engineer",
  description: profile.tagline,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: locality,
    addressRegion: region,
    addressCountry: country,
  },
  // the profiles Google uses to reconcile "which Tushar Jain is this"
  sameAs: Object.values(profile.links),
  knowsAbout: skills.flatMap((group) => group.items),
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Amity University, Noida",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Frontend Developer",
    occupationLocation: { "@type": "Country", name: country },
  },
  worksFor: experience.map((job) => ({
    "@type": "Organization",
    name: job.company,
  })),
};

const page = {
  "@type": "ProfilePage",
  "@id": PAGE_ID,
  url: profile.siteUrl,
  name: `${profile.name} — Frontend Engineer`,
  description: profile.tagline,
  inLanguage: "en",
  mainEntity: { "@id": PERSON_ID },
};

/* Only the linkable work — an entry with no URL gives a crawler nothing to
   verify, and unverifiable list items are worth less than a shorter list. */
const portfolio = {
  "@type": "ItemList",
  name: "Selected client projects",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: projects.filter((p) => p.link).length,
  itemListElement: projects
    .filter((p) => p.link)
    .map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebSite",
        name: p.title,
        description: p.subtitle,
        url: p.link,
        creator: { "@id": PERSON_ID },
      },
    })),
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [page, person, portfolio],
};
