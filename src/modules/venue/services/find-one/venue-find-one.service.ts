import { Injectable } from '@nestjs/common';
import { IVenueInterface } from '../../repository/interface/vanue-interface';
import { Venue } from '@prisma/client';

@Injectable()
export class VenueFindOneService {
  constructor(private repo: IVenueInterface) {}

  async findOne(id: string): Promise<Venue> {
    return await this.repo.findOne(id);
  }
}
