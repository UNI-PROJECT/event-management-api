import { Test, TestingModule } from '@nestjs/testing';
import { EventFindOneService } from './event-find-one.service';
import { IEventInterface } from '../../repository/interface/event-interface';

describe('EventFindOneService', () => {
  let service: EventFindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventFindOneService,
        {
          provide: IEventInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EventFindOneService>(EventFindOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
