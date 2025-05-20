import { z } from "zod";
import { DEFAULT_PAGE_SIZE } from '@utils/constant';



export const PaginationSchema =z.object({
    limit:z.number().positive(),
    skip:z.number().positive().default(DEFAULT_PAGE_SIZE),
})

export type PaginationDto =z.infer<typeof PaginationSchema>