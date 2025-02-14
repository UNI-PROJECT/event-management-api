import { Injectable } from '@nestjs/common';
import { IUserInterface } from '../../repository/interface/user-interface';

@Injectable()
export class UserDeleteService {
  constructor(private repo: IUserInterface) {}

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}
