import { defineCollection, z } from "astro:content";
// import { convertCompilerOptionsFromJson } from "typescript";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      coverImage: z.string(),
      title: z.string(),
      description: z.string(),
      pubDate: z.string(),
      heroImage: z.array(z.string()), 
      tags: z.array(z.string()), //Array permet de stocker plusieurs valeurs
    }),
  }),
};
