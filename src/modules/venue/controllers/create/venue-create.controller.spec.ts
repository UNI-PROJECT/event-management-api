/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { IVenueInterface } from '../../repository/interface/vanue-interface';
import { VenueCreateService } from '../../services/create/event-create.service';
import { VenueCreateController } from './venue-create.controller';

describe('VenueCreateController', () => {
  let controller: VenueCreateController;
  let service: VenueCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenueCreateController],
      providers: [
        VenueCreateService,
        {
          provide: IVenueInterface,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<VenueCreateController>(VenueCreateController);
    service = module.get<VenueCreateService>(VenueCreateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
