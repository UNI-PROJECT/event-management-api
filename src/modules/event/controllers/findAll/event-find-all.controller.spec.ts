import { Test, TestingModule } from '@nestjs/testing';
import { EventFindAllController } from './event-find-all.controller';
import { EventFindAllService } from '../../services/find-all/event-find-all.service';
import { IEventInterface } from '../../repository/interface/event-interface';

describe('EventFindAllController', () => {
  let controller: EventFindAllController;
  let service: EventFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventFindAllController],
      providers: [
        {
          provide: EventFindAllService,
          useValue: {
            findAll: jest.fn(),
          },
        },
        {
          provide: IEventInterface,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<EventFindAllController>(EventFindAllController);
    service = module.get<EventFindAllService>(EventFindAllService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
