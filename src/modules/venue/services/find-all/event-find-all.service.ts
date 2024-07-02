import { Injectable } from '@nestjs/common';
import { IEventInterface } from '../../repository/interface/vanue-interface';

@Injectable()
export class EventFindAllService {
  constructor(private repo: IEventInterface) {}

  async findAll() {
    return await this.repo.findAll();
  }
}
