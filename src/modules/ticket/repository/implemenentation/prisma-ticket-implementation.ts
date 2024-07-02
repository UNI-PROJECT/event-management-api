import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { messages } from '../../../../utils/errorMessages';
import { Ticket } from '@prisma/client';
import { ITicketInterface } from '../interface/ticket-interface';

@Injectable()
export class PrismaTicketRepository implements ITicketInterface {
  constructor(private prisma: PrismaService) {}
  async findOne(id: string): Promise<any> {
    const value = this.prisma.ticket.findUnique({ where: { id: id } });

    if (!value) {
      throw new NotFoundException(messages.venueNotFound);
    }
    return value;
  }

  async update(id: string, data: any): Promise<Ticket> {
    const venue = this.prisma.ticket.findUnique({ where: { id: id } });

    if (!venue) {
      throw new NotFoundException(messages.venueNotFound);
    }
    return await this.prisma.ticket.update({
      where: { id },
      data: data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.event.delete({ where: { id: id } });
  }

  async create(data: any): Promise<Ticket> {
    return await this.prisma.ticket.create({ data });
  }
  async findAll(): Promise<Ticket[]> {
    return await this.prisma.ticket.findMany();
  }
}
