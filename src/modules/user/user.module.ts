import { Module } from '@nestjs/common';

@Module({
  providers: [
    UserCreateService,
    UserUpdateService,
    UserDeleteService,
    UserFindOneService,
    UserFindAllService,
  ],
})
export class UserModule {}
