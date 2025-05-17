import { IsInt, IsString } from "class-validator";

export class CreatePropertyDto{
    @IsString()
    name:string;

    @IsString()
    description:string;

    @IsInt()
    price:number;
}

export class CreatePropertySingleDto{
    @IsString()
    parentName:string
}