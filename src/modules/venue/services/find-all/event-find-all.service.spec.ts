import { Test, TestingModule } from '@nestjs/testing';
import { EventFindAllService } from './event-find-all.service';
import { IEventInterface } from '../../repository/interface/vanue-interface';

describe('EventFindAllService', () => {
  let service: EventFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventFindAllService,
        {
          provide: IEventInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EventFindAllService>(EventFindAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
