import { z } from "zod";

const paginationSchema = z.object({
    page: z.number().min(1),
    perPage: z.number().min(1),
    total: z.number().min(1),
});

export type PaginationSchema = z.infer<typeof paginationSchema>;