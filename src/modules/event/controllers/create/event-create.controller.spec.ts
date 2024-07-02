/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { IEventInterface } from '../../repository/interface/event-interface';
import { EventCreateController } from './event-create.controller';
import { EventCreateService } from '../../services/create/event-create.service';

describe('EventCreateController', () => {
  let controller: EventCreateController;
  let service: EventCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventCreateController],
      providers: [
        EventCreateService,
        {
          provide: IEventInterface,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<EventCreateController>(EventCreateController);
    service = module.get<EventCreateService>(EventCreateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
