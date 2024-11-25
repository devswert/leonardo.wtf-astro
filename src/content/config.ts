import { z, defineCollection } from "astro:content";

const jobsCollection = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    tools: z.array(z.string()),
    position: z.string(),
    timeFrame: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const sideProjectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    date: z.string(),
    description: z.string(),
    tools: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  jobs: jobsCollection,
  sideProjects: sideProjectsCollection,
};
