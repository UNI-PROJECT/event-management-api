import { Injectable } from '@nestjs/common';
import { IBookingInterface } from '../../repository/interface/ticket-interface';

@Injectable()
export class BookingDeleteService {
  constructor(private repo: IBookingInterface) {}

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}
