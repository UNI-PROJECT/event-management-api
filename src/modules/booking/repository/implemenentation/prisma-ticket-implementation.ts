import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { messages } from '../../../../utils/errorMessages';
import { Booking } from '@prisma/client';
import { IBookingInterface } from '../interface/ticket-interface';

@Injectable()
export class PrismaBookingRepository implements IBookingInterface {
  constructor(private prisma: PrismaService) {}
  async findOne(id: string): Promise<any> {
    const value = this.prisma.booking.findUnique({ where: { id: id } });

    if (!value) {
      throw new NotFoundException(messages.venueNotFound);
    }
    return value;
  }

  async update(id: string, data: any): Promise<Booking> {
    const venue = this.prisma.booking.findUnique({ where: { id: id } });

    if (!venue) {
      throw new NotFoundException(messages.venueNotFound);
    }
    return await this.prisma.booking.update({
      where: { id },
      data: data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.event.delete({ where: { id: id } });
  }

  async create(data: any): Promise<Booking> {
    return await this.prisma.booking.create({ data });
  }
  async findAll(): Promise<Booking[]> {
    return await this.prisma.booking.findMany();
  }
}
