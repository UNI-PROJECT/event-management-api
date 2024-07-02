import { Test, TestingModule } from '@nestjs/testing';
import { EventUpdateController } from './event-update.controller';

describe('EventFindUpdateController', () => {
  let controller: EventUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventUpdateController],
    }).compile();

    controller = module.get<EventUpdateController>(EventUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
