import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    thumbnail: z.string(),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    image: z.string(),
    banner: z.string(),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  work,
  projects,
  blog,
};
