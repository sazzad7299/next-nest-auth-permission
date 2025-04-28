import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
@Controller('users')
export class UsersController {
    @Get()
    getHello(): string {
        return 'Hello';
    };

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    createUser(@Body() body: createUserDto) {
        return body
    }

    @Patch(":id")
    update(@Body(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['update']
    })) body: createUserDto) {
        return body;
    }
}
