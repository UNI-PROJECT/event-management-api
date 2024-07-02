/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { IEventInterface } from '../../repository/interface/vanue-interface';
import { EventFindOneService } from '../../services/find-one/event-find-one.service';
import { EventFindOneController } from './user-find-one.controller';

describe('UserOneController', () => {
  let controller: EventFindOneController;
  let service: EventFindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventFindOneController],
      providers: [
        EventFindOneService,
        {
          provide: IEventInterface,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<EventFindOneController>(EventFindOneController);
    service = module.get<EventFindOneService>(EventFindOneService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
