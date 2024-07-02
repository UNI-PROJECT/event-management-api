import { Test, TestingModule } from '@nestjs/testing';
import { VenueDeleteController } from './venue-delete.controller';

describe('EventDeleteController', () => {
  let controller: VenueDeleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenueDeleteController],
    }).compile();

    controller = module.get<VenueDeleteController>(VenueDeleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
