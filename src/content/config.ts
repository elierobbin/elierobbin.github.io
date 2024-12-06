import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      logiciel: z.string(),
      pubDate: z.string(),
      heroImage: z.union([z.string(), z.array(z.string())]), // Accepte une chaîne ou un tableau
    }),
  }),
};
