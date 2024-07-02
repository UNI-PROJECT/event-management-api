import { Event } from '@prisma/client';
import { CreateEventDto } from '../../dtos/user-input-type';

export abstract class IEventInterface {
  abstract create(data: CreateEventDto): Promise<Event>;
  abstract findAll(): Promise<Event[]>;
  abstract findOne(id: string): Promise<Event>;
  abstract update(id: string, data: CreateEventDto): Promise<Event>;
  abstract delete(id: string): Promise<void>;
}
