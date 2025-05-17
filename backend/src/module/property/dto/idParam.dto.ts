import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class IdParamDto{
    @IsInt()
    @IsPositive()
    id:number

    @IsString()
    @Length(2,5)
    code:string
}