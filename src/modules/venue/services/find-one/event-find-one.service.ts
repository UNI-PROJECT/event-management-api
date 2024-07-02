import { Injectable } from '@nestjs/common';
import { IEventInterface } from '../../repository/interface/vanue-interface';
import { Event } from '@prisma/client';

@Injectable()
export class EventFindOneService {
  constructor(private repo: IEventInterface) {}

  async findOne(id: string): Promise<Event> {
    return await this.repo.findOne(id);
  }
}
