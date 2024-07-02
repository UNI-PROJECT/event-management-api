import { Controller, Get, Param } from '@nestjs/common';
import { UserFindOneService } from '../../services/find-one/user-find-one.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserFindOneController {
  constructor(private readonly repo: UserFindOneService) {}

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.repo.findOne(id);
  }
}
