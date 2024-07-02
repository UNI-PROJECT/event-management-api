import { Injectable } from '@nestjs/common';
import { IVenueInterface } from '../../repository/interface/vanue-interface';

@Injectable()
export class VenueFindAllService {
  constructor(private repo: IVenueInterface) {}

  async findAll() {
    return await this.repo.findAll();
  }
}
