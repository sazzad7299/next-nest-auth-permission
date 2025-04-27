import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    private users: User[] = []; // You'd normally use a database!

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async create(username: string, password: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { id: Date.now(), username, password: hashedPassword };
        this.users.push(user);
        return user;
    }
}
