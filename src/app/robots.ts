import type { MetadataRoute } from "next";
import { siteContent } from "@/data/siteContent";

export default function robots(): MetadataRoute.Robots {
  const base = siteContent.business.websiteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
