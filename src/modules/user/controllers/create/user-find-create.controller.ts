import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateService } from '../../services/create/user-create.service';
import { CreateUserDto } from '../../dtos/user-input-type';
import { User } from '@prisma/client';

@Controller('user')
export class UserCreateController {
  constructor(private readonly repo: UserCreateService) {}

  @Post('register')
  async create(@Body() data: CreateUserDto): Promise<User> {
    return this.repo.create(data);
  }
}
