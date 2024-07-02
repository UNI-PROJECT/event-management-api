import { Injectable } from '@nestjs/common';
import { IBookingInterface } from '../../repository/interface/ticket-interface';

@Injectable()
export class BookingFindAllService {
  constructor(private repo: IBookingInterface) {}

  async findAll() {
    return await this.repo.findAll();
  }
}
