import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ParticipantModule } from './modules/participant/participant.module';
import { EventModule } from './modules/event/event.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { VenueModule } from './modules/venue/event.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    EventModule,
    ParticipantModule,
    PrismaModule,
    VenueModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
