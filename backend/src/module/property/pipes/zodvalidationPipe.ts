import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { parse } from "path";
import { ZodSchema } from "zod";

export class zodValidationPipe implements PipeTransform{
    constructor(private schema:ZodSchema){}


    transform(value: any, metadata: ArgumentMetadata) {
       const parssedValue = this.schema.safeParse(value)

       if(parssedValue.success) return parssedValue
       throw new BadRequestException(parssedValue.error.format())
    }
}