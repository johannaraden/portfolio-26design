import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/work";

// Required for `output: "export"` so the file is written at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    ...caseStudies.map((cs) => ({ url: `${site.url}/work/${cs.slug}/` })),
  ];
}
