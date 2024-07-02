import { Test, TestingModule } from '@nestjs/testing';
import { TicketCreateService } from './ticket-create.service';
import { ITicketInterface } from '../../repository/interface/ticket-interface';

describe('TicketCreateService', () => {
  let service: TicketCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketCreateService,
        {
          provide: ITicketInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<TicketCreateService>(TicketCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
