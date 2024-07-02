import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventCreateController } from './controllers/create/event-create.controller';
import { EventDeleteController } from './controllers/delete/event-delete.controller';
import { EventFindAllController } from './controllers/findAll/event-find-all.controller';
import { EventFindOneController } from './controllers/findOne/user-find-one.controller';
import { EventUpdateController } from './controllers/update/event-update.controller';
import { PrismaEventRepository } from './repository/implemenentation/prisma-event-implementation';
import { IEventInterface } from './repository/interface/event-interface';
import { EventCreateService } from './services/create/event-create.service';
import { EventDeleteService } from './services/delete/event-delete.service';
import { EventFindAllService } from './services/find-all/event-find-all.service';
import { EventFindOneService } from './services/find-one/event-find-one.service';
import { EventUpdateService } from './services/update/event-update.service';

@Module({
  providers: [
    PrismaService,
    EventCreateService,
    EventUpdateService,
    EventFindOneService,
    EventFindAllService,
    EventDeleteService,
    { provide: IEventInterface, useClass: PrismaEventRepository },
  ],
  controllers: [
    EventCreateController,
    EventFindAllController,
    EventFindOneController,
    EventUpdateController,
    EventDeleteController,
  ],
})
export class EventModule {}
