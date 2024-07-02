import { Controller, Get } from '@nestjs/common';
import { Venue } from '@prisma/client';
import { VenueFindAllService } from '../../services/find-all/venue-find-all.service';

@Controller('venue')
export class EventFindAllController {
  constructor(private readonly repo: VenueFindAllService) {}

  @Get()
  async findAll(): Promise<Venue[]> {
    return this.repo.findAll();
  }
}
