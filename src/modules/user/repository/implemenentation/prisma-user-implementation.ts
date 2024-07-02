import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserInterface } from '../interface/user-interface';
import { CreateUserDto } from '../../dtos/user-input-type';
import { PrismaService } from '../../../prisma/prisma.service';
import { messages } from 'src/errorMessages';
import { User } from '@prisma/client';

@Injectable()
export class PrismaUserRepository implements IUserInterface {
  constructor(private prisma: PrismaService) {}
  async findOne(id: string): Promise<User> {
    const user = this.prisma.user.findUnique({ where: { id: id } });

    if (!user) {
      throw new NotFoundException(messages.userNotFound);
    }
    return user;
  }
  async update(id: string, data: CreateUserDto): Promise<User> {
    const user = this.prisma.user.findUnique({ where: { id: id } });

    if (!user) {
      throw new NotFoundException(messages.userNotFound);
    }
    return await this.prisma.user.update({
      where: { id },
      data: data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id: id } });
  }

  async create(data: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({ data });
  }
  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
