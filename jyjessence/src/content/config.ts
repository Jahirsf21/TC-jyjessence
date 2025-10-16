import { defineCollection, z } from "astro:content";

const perfumes = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    gender: z.string(),
    img: z.string(),
    description: z.string(),
  }),

})


export const collections = { perfumes}