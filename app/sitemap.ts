import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://maxivaz.com.ar",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://maxivaz.com.ar/#about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://maxivaz.com.ar/#services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: "https://maxivaz.com.ar/#portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://maxivaz.com.ar/#contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}