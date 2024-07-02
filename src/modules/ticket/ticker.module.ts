import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ITicketInterface } from './repository/interface/ticket-interface';
import { TicketCreateService } from './services/create/ticket-create.service';
import { TicketFindAllService } from './services/find-all/ticket-find-all.service';
import { TicketFindOneService } from './services/find-one/ticket-find-one.service';
import { TicketDeleteService } from '../ticket/services/delete/ticket-delete.service';
import { PrismaTicketRepository } from '../ticket/repository/implemenentation/prisma-ticket-implementation';

@Module({
  providers: [
    PrismaService,
    TicketCreateService,
    TicketDeleteService,
    TicketFindOneService,
    TicketFindAllService,
    { provide: ITicketInterface, useClass: PrismaTicketRepository },
  ],
})
export class TicketModule {}
