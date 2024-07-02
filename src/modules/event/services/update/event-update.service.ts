import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../../dtos/user-input-type';
import { IEventInterface } from '../../repository/interface/event-interface';
import { Event } from '@prisma/client';

@Injectable()
export class EventUpdateService {
  constructor(private repo: IEventInterface) {}

  async update(id: string, data: CreateEventDto): Promise<Event> {
    return await this.repo.update(id, data);
  }
}
