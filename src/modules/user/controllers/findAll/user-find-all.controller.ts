import { Controller, Get } from '@nestjs/common';
import { UserFindAllService } from '../../services/find-all/user-find-all.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserFindAllController {
  constructor(private readonly repo: UserFindAllService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.repo.findAll();
  }
}
