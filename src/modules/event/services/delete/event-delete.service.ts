import { Injectable } from '@nestjs/common';
import { IEventInterface } from '../../repository/interface/event-interface';

@Injectable()
export class EventDeleteService {
  constructor(private repo: IEventInterface) {}

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}
