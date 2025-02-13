import { z } from 'zod';

const imageSchema = z.string().refine(
    (value) => {
        return value.endsWith('/screenshot.webp') &&
            value.startsWith('@/src/themes/') &&
            value.split('/').length === 5;
    },
    {
        message: 'Image must be in webp format and named as screenshot.webp and be located in @/src/themes/{theme_name}/',
    }
);

export const themeSchema = z.object({
    name: z.string().min(3).max(56),
    image: imageSchema,
    author: z.string().min(3).max(24),
});

export type Theme = z.infer<typeof themeSchema>;