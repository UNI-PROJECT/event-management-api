import { Injectable } from '@nestjs/common';
import { ITicketInterface } from '../../repository/interface/ticket-interface';

@Injectable()
export class TicketDeleteService {
  constructor(private repo: ITicketInterface) {}

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}
