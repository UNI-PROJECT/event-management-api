import { Test, TestingModule } from '@nestjs/testing';
import { ITicketInterface } from '../../repository/interface/ticket-interface';
import { TicketDeleteService } from './ticket-delete.service';

describe('TicketDeleteService', () => {
  let service: TicketDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketDeleteService,
        {
          provide: ITicketInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<TicketDeleteService>(TicketDeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
