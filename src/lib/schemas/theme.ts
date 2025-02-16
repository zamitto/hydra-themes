import { z } from "zod";

export const themeSchema = z.object({
  name: z.string().min(3).max(56),
  screenshotFile: z.string().min(3).max(256),
  cssFile: z.string().min(3).max(256),
  author: z.object({
    id: z.string(),
    displayName: z.string(),
    profileImageUrl: z.string(),
  }),
  authorImage: z.string().min(3).max(256),
});

export type Theme = z.infer<typeof themeSchema>;
