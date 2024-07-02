import { Test, TestingModule } from '@nestjs/testing';
import { VenueUpdateController } from './venue-update.controller';

describe('EventFindUpdateController', () => {
  let controller: VenueUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenueUpdateController],
    }).compile();

    controller = module.get<VenueUpdateController>(VenueUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
