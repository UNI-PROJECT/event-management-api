import { Injectable } from '@nestjs/common';
import { IUserInterface } from '../../repository/interface/user-interface';
import { CreateUserDto } from '../../dtos/user-input-type';

@Injectable()
export class UserCreateService {
  constructor(readonly repo: IUserInterface) {}

  async create(data: CreateUserDto) {
    return await this.repo.create(data);
  }
}
