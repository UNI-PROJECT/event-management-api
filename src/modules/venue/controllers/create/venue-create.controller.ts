import { Body, Controller, Post } from '@nestjs/common';
import { CreateVenueDto } from '../../dtos/venue-input-type';
import { Venue } from '@prisma/client';
import { VenueCreateService } from '../../services/create/event-create.service';

@Controller('venue')
export class VenueCreateController {
  constructor(private readonly repo: VenueCreateService) {}

  @Post('register')
  async create(@Body() data: CreateVenueDto): Promise<Venue> {
    return this.repo.create(data);
  }
}
