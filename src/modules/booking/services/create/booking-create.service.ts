import { Injectable } from '@nestjs/common';
import { IBookingInterface } from '../../repository/interface/ticket-interface';

@Injectable()
export class BookingCreateService {
  constructor(readonly repo: IBookingInterface) {}

  async create(data: any) {
    return await this.repo.create(data);
  }
}
