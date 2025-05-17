import { z } from "zod";

export const CreatePropertySchema =z.object({
    name:z.string(),
    description:z.string(),
    price:z.number().positive()
}).required()

export type CreatePropertyZodDto =z.infer<typeof CreatePropertySchema>