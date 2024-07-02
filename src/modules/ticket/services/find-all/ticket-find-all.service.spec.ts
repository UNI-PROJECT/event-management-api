import { Test, TestingModule } from '@nestjs/testing';
import { TicketFindAllService } from './ticket-find-all.service';
import { ITicketInterface } from '../../repository/interface/ticket-interface';

describe('TicketFindAllService', () => {
  let service: TicketFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketFindAllService,
        {
          provide: ITicketInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<TicketFindAllService>(TicketFindAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
