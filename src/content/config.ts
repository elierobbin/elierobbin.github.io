import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.string(),
      heroImage: z.union([z.string(), z.array(z.string())]),
      tags: z.array(z.string()), //Array permet de stocker plusieurs valeurs
    }),
  }),
};
