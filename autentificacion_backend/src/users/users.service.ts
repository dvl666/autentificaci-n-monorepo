import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(
        private readonly prisma: PrismaService
    ) {}

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const userData = { ...data,  password: hashedPassword };
        return this.prisma.user.create({
            data: userData,
        })
    }

    getUsers(): Promise<User[]> {
        return this.prisma.user.findMany({})
    } 

    async validateUser(email: string, password: string): Promise<User> {
        const user = await this. prisma.user.findUnique({ where: {email} });
        if (!user) throw new UnauthorizedException('Invalid crendentials');
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials')
        return user
    }

}
