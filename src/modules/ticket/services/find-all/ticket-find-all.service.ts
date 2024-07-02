import { Injectable } from '@nestjs/common';
import { ITicketInterface } from '../../repository/interface/ticket-interface';

@Injectable()
export class TicketFindAllService {
  constructor(private repo: ITicketInterface) {}

  async findAll() {
    return await this.repo.findAll();
  }
}
