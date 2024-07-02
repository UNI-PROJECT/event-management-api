import { Controller, Get, Param } from '@nestjs/common';
import { Venue } from '@prisma/client';
import { VenueFindOneService } from '../../services/find-one/venue-find-one.service';

@Controller('venue')
export class VenueFindOneController {
  constructor(private readonly repo: VenueFindOneService) {}

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Venue> {
    return this.repo.findOne(id);
  }
}
