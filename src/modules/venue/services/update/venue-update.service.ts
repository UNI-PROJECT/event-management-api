import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from '../../dtos/venue-input-type';
import { IVenueInterface } from '../../repository/interface/vanue-interface';
import { Venue } from '@prisma/client';

@Injectable()
export class VenueUpdateService {
  constructor(private repo: IVenueInterface) {}

  async update(id: string, data: CreateVenueDto): Promise<Venue> {
    return await this.repo.update(id, data);
  }
}
