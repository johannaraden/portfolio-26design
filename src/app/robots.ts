import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Required for `output: "export"` so the file is written at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
