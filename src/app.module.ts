import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ParticipantModule } from './modules/participant/participant.module';
import { EventModule } from './modules/event/event.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoginModule } from './modules/login/login.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, LoginModule, AuthModule, EventModule, ParticipantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
