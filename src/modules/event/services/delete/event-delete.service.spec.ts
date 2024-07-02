import { Test, TestingModule } from '@nestjs/testing';
import { EventDeleteService } from './event-delete.service';
import { IEventInterface } from '../../repository/interface/event-interface';

describe('EventDeleteService', () => {
  let service: EventDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventDeleteService,
        {
          provide: IEventInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EventDeleteService>(EventDeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
