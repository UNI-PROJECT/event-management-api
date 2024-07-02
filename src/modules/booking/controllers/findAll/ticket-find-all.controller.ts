import { Controller, Get } from '@nestjs/common';
import { Booking } from '@prisma/client';
import { BookingFindAllService } from '../../services/find-all/booking-find-all.service';

@Controller('booking')
export class BookingFindAllController {
  constructor(private readonly repo: BookingFindAllService) {}

  @Get()
  async findAll(): Promise<Booking[]> {
    return this.repo.findAll();
  }
}
