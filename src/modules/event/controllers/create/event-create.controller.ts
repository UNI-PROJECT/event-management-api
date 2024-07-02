import { Body, Controller, Post } from '@nestjs/common';
import { EventCreateService } from '../../services/create/event-create.service';
import { CreateEventDto } from '../../dtos/user-input-type';
import { Event } from '@prisma/client';

@Controller('event')
export class EventCreateController {
  constructor(private readonly repo: EventCreateService) {}

  @Post('register')
  async create(@Body() data: CreateEventDto): Promise<Event> {
    return this.repo.create(data);
  }
}
