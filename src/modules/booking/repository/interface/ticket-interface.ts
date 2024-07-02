import { Booking } from '@prisma/client';
import { CreateTicketDto } from 'src/modules/ticket/dtos/ticket-input-type';
import { CreateBookingDto } from '../../dtos/ticket-input-type';

export abstract class IBookingInterface {
  abstract create(data: CreateTicketDto): Promise<Booking>;
  abstract findAll(): Promise<Booking[]>;
  abstract findOne(id: string): Promise<Booking>;
  abstract update(id: string, data: CreateBookingDto): Promise<Booking>;
  abstract delete(id: string): Promise<void>;
}
