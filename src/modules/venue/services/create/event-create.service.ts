import { Injectable } from '@nestjs/common';
import { IVenueInterface } from '../../repository/interface/vanue-interface';
import { CreateVenueDto } from '../../dtos/venue-input-type';

@Injectable()
export class VenueCreateService {
  constructor(readonly repo: IVenueInterface) {}

  async create(data: CreateVenueDto) {
    return await this.repo.create(data);
  }
}
