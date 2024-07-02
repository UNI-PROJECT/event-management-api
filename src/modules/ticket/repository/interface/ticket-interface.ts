import { Ticket } from '@prisma/client';
import { CreateTicketDto } from '../../dtos/ticket-input-type';

export abstract class ITicketInterface {
  abstract create(data: CreateTicketDto): Promise<Ticket>;
  abstract findAll(): Promise<Ticket[]>;
  abstract findOne(id: string): Promise<Ticket>;
  abstract update(id: string, data: CreateTicketDto): Promise<Ticket>;
  abstract delete(id: string): Promise<void>;
}
