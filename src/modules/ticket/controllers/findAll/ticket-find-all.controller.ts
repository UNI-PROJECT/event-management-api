import { Controller, Get } from '@nestjs/common';
import { Ticket } from '@prisma/client';
import { TicketFindAllService } from '../../services/find-all/ticket-find-all.service';

@Controller('ticket')
export class TicketFindAllController {
  constructor(private readonly repo: TicketFindAllService) {}

  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.repo.findAll();
  }
}
