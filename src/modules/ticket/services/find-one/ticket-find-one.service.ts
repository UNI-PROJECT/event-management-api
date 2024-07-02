import { Injectable } from '@nestjs/common';
import { ITicketInterface } from '../../repository/interface/ticket-interface';
import { Ticket } from '@prisma/client';

@Injectable()
export class TicketFindOneService {
  constructor(private repo: ITicketInterface) {}

  async findOne(id: string): Promise<Ticket> {
    return await this.repo.findOne(id);
  }
}
