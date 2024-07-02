import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { EventModule } from './modules/event/event.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { VenueModule } from './modules/venue/venue.module';
import { TicketModule } from './modules/ticket/ticker.module';
import { BookingModule } from './modules/booking/booking.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    EventModule,
    PrismaModule,
    VenueModule,
    TicketModule,
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
