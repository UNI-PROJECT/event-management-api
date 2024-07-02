import { Test, TestingModule } from '@nestjs/testing';
import { TicketFindOneService } from './ticket-find-one.service';
import { ITicketInterface } from '../../repository/interface/ticket-interface';

describe('EventFindOneService', () => {
  let service: TicketFindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketFindOneService,
        {
          provide: ITicketInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<TicketFindOneService>(TicketFindOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
