import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from '../../dtos/ticket-input-type';
import { ITicketInterface } from '../../repository/interface/ticket-interface';

@Injectable()
export class TicketCreateService {
  constructor(readonly repo: ITicketInterface) {}

  async create(data: CreateTicketDto) {
    return await this.repo.create(data);
  }
}
