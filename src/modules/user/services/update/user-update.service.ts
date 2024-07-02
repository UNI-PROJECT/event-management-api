import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/user-input-type';
import { IUserInterface } from '../../repository/interface/user-interface';
import { User } from '@prisma/client';

@Injectable()
export class UserUpdateService {
  constructor(private repo: IUserInterface) {}

  async update(id: string, data: CreateUserDto): Promise<User> {
    return await this.repo.update(id, data);
  }
}
