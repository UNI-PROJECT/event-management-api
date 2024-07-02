import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { VenueCreateController } from './controllers/create/venue-create.controller';
import { IVenueInterface } from './repository/interface/vanue-interface';
import { VenueCreateService } from './services/create/event-create.service';
import { VenueFindAllService } from './services/find-all/venue-find-all.service';
import { VenueFindOneService } from './services/find-one/venue-find-one.service';
import { VenueUpdateController } from './controllers/update/venue-update.controller';
import { PrismaVenueRepository } from './repository/implemenentation/prisma-vanue-implementation';
import { VenueDeleteController } from './controllers/delete/venue-delete.controller';
import { EventFindAllController } from './controllers/findAll/venue-find-all.controller';

@Module({
  providers: [
    PrismaService,
    VenueCreateService,
    VenueFindOneService,
    VenueFindAllService,
    { provide: IVenueInterface, useClass: PrismaVenueRepository },
  ],
  controllers: [
    VenueCreateController,
    VenueDeleteController,
    VenueUpdateController,
    EventFindAllController,
  ],
})
export class VenueModule {}
