import { Module } from '@nestjs/common';
import { UserFindAllController } from './controllers/findAll/user-find-all.controller';
import { UserFindOneController } from './controllers/findOne/user-find-one.controller';
import { UserFindUpdateController } from './controllers/update/user-update.controller';
import { UserFindDeleteController } from './controllers/delete/user-delete.controller';
import { UserCreateService } from './services/create/user-create.service';
import { UserUpdateService } from './services/update/user-update.service';
import { UserFindOneService } from './services/find-one/user-find-one.service';
import { UserFindAllService } from './services/find-all/user-find-all.service';
import { UserDeleteService } from './services/delete/user-delete.service';
import { IUserInterface } from '../user/repository/interface/user-interface';
import { PrismaUserRepository } from '../user/repository/implemenentation/prisma-user-implementation';
import { PrismaService } from '../prisma/prisma.service';
import { UserCreateController } from './controllers/create/user-create.controller';

@Module({
  providers: [
    PrismaService,
    UserCreateService,
    UserUpdateService,
    UserFindOneService,
    UserFindAllService,
    UserDeleteService,
    { provide: IUserInterface, useClass: PrismaUserRepository },
  ],
  controllers: [
    UserCreateController,
    UserFindAllController,
    UserFindOneController,
    UserFindUpdateController,
    UserFindDeleteController,
  ],
})
export class UserModule {}
