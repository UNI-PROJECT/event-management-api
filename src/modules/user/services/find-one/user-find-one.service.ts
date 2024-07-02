import { Injectable } from '@nestjs/common';
import { IUserInterface } from '../../repository/interface/user-interface';
import { User } from '@prisma/client';

@Injectable()
export class UserFindOneService {
  constructor(private repo: IUserInterface) {}

  async findOne(id: string): Promise<User> {
    return await this.repo.findOne(id);
  }
}
