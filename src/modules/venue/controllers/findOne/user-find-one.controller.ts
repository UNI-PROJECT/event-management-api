import { Controller, Get, Param } from '@nestjs/common';
import { EventFindOneService } from '../../services/find-one/event-find-one.service';
import { Event } from '@prisma/client';

@Controller('Event')
export class EventFindOneController {
  constructor(private readonly repo: EventFindOneService) {}

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Event> {
    return this.repo.findOne(id);
  }
}
