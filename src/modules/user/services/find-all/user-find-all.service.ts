import { Injectable } from '@nestjs/common';
import { IUserInterface } from '../../repository/interface/user-interface';

@Injectable()
export class UserFindAllService {
  constructor(private repo: IUserInterface) {}

  async findAll() {
    return await this.repo.findAll();
  }
}
