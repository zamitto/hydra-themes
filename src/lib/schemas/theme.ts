import { z } from 'zod';
import { colord } from 'colord';

const colorSchema = z.string().refine((value) => colord(value).isValid(), {
    message: 'Invalid color format',
});

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
    description: z.string().min(3).max(255),
    image: imageSchema,
    author: z.string().min(3).max(24),
    colors: z.object({
        accent: colorSchema,
        surface: colorSchema,
        background: colorSchema,
        text: colorSchema.optional(),
        border: colorSchema.optional(),
    }),
});

export type Theme = z.infer<typeof themeSchema>;