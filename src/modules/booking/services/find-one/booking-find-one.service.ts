import { Injectable } from '@nestjs/common';
import { Booking } from '@prisma/client';
import { IBookingInterface } from '../../repository/interface/ticket-interface';

@Injectable()
export class BookingFindOneService {
  constructor(private repo: IBookingInterface) {}

  async findOne(id: string): Promise<Booking> {
    return await this.repo.findOne(id);
  }
}
