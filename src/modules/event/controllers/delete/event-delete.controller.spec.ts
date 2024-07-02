import { Test, TestingModule } from '@nestjs/testing';
import { EventDeleteController } from './event-delete.controller';

describe('EventDeleteController', () => {
  let controller: EventDeleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventDeleteController],
    }).compile();

    controller = module.get<EventDeleteController>(EventDeleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
