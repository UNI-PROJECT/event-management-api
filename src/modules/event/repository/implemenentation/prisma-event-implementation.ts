import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Event } from '@prisma/client';
import { CreateEventDto } from '../../dtos/user-input-type';
import { IEventInterface } from '../interface/event-interface';
import { messages } from 'src/utils/errorMessages';

@Injectable()
export class PrismaEventRepository implements IEventInterface {
  constructor(private prisma: PrismaService) {}
  async findOne(id: string): Promise<Event> {
    const event = this.prisma.event.findUnique({ where: { id: id } });

    if (!event) {
      throw new NotFoundException(messages.eventNotFound);
    }
    return event;
  }

  async update(id: string, data: CreateEventDto): Promise<Event> {
    const event = this.prisma.event.findUnique({ where: { id: id } });

    if (!event) {
      throw new NotFoundException(messages.eventNotFound);
    }
    return await this.prisma.event.update({
      where: { id },
      data: data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.event.delete({ where: { id: id } });
  }

  async create(data: CreateEventDto): Promise<Event> {
    return await this.prisma.event.create({ data });
  }
  async findAll(): Promise<Event[]> {
    return await this.prisma.event.findMany();
  }
}
