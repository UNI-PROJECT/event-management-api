import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaBookingRepository } from './repository/implemenentation/prisma-ticket-implementation';
import { IBookingInterface } from './repository/interface/ticket-interface';
import { BookingFindAllService } from './services/find-all/booking-find-all.service';
import { BookingFindOneService } from './services/find-one/booking-find-one.service';
import { BookingCreateService } from './services/create/booking-create.service';
import { UpdateController } from './controllers/update/update.controller';
import { CreateController } from './controllers/create/create.controller';
import { DeleteController } from './controllers/delete/delete.controller';

@Module({
  providers: [
    PrismaService,
    BookingCreateService,
    BookingFindAllService,
    BookingFindOneService,
    { provide: IBookingInterface, useClass: PrismaBookingRepository },
  ],
  controllers: [CreateController, UpdateController, DeleteController],
})
export class BookingModule {}
