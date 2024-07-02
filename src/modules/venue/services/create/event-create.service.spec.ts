import { Test, TestingModule } from '@nestjs/testing';
import { EventCreateService } from './event-create.service';
import { IEventInterface } from '../../repository/interface/vanue-interface';

describe('EventCreateService', () => {
  let service: EventCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventCreateService,
        {
          provide: IEventInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EventCreateService>(EventCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
