import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { messages } from 'src/errorMessages';
import { Venue } from '@prisma/client';
import { CreateVenueDto } from '../../dtos/user-input-type';
import { IVenueInterface } from '../interface/vanue-interface';

@Injectable()
export class PrismaEventRepository implements IVenueInterface {
  constructor(private prisma: PrismaService) {}
  async findOne(id: string): Promise<Venue> {
    const value = this.prisma.venue.findUnique({ where: { id: id } });

    if (!value) {
      throw new NotFoundException(messages.venueNotFound);
    }
    return value;
  }

  async update(id: string, data: CreateVenueDto): Promise<Venue> {
    const venue = this.prisma.venue.findUnique({ where: { id: id } });

    if (!venue) {
      throw new NotFoundException(messages.venueNotFound);
    }
    return await this.prisma.venue.update({
      where: { id },
      data: data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.event.delete({ where: { id: id } });
  }

  async create(data: any): Promise<Venue> {
    return await this.prisma.venue.create({ data });
  }
  async findAll(): Promise<Venue[]> {
    return await this.prisma.venue.findMany();
  }
}
