import { Injectable } from '@nestjs/common';
import { IVenueInterface } from '../../repository/interface/vanue-interface';

@Injectable()
export class VenueDeleteService {
  constructor(private repo: IVenueInterface) {}

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}
