import { Injectable } from '@nestjs/common';
import { IEventInterface } from '../../repository/interface/vanue-interface';
import { CreateEventDto } from '../../dtos/user-input-type';

@Injectable()
export class EventCreateService {
  constructor(readonly repo: IEventInterface) {}

  async create(data: CreateEventDto) {
    return await this.repo.create(data);
  }
}
