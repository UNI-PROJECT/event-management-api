import { Controller, Get } from '@nestjs/common';
import { EventFindAllService } from '../../services/find-all/event-find-all.service';
import { Event } from '@prisma/client';

@Controller('event')
export class EventFindAllController {
  constructor(private readonly repo: EventFindAllService) {}

  @Get()
  async findAll(): Promise<Event[]> {
    return this.repo.findAll();
  }
}
