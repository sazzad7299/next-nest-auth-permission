import { IsString, Length } from "class-validator";

export class createUserDto {

    @IsString({ always: true })
    @Length(5, 10, { always: true })
    name: string;

    @IsString({ always: true })
    @Length(5, 10, { always: true })
    description: string;
}