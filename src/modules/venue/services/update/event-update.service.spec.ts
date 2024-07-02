import { Test, TestingModule } from '@nestjs/testing';
import { IEventInterface } from '../../repository/interface/vanue-interface';
import { EventUpdateService } from './event-update.service';

describe('UserUpdateService', () => {
  let service: EventUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventUpdateService,
        {
          provide: IEventInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EventUpdateService>(EventUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
