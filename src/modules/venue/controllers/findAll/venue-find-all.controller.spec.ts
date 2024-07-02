import { Test, TestingModule } from '@nestjs/testing';
import { EventFindAllController } from './venue-find-all.controller';
import { IVenueInterface } from '../../repository/interface/vanue-interface';
import { VenueFindAllService } from '../../services/find-all/venue-find-all.service';

describe('EventFindAllController', () => {
  let controller: EventFindAllController;
  let service: VenueFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventFindAllController],
      providers: [
        {
          provide: VenueFindAllService,
          useValue: {
            findAll: jest.fn(),
          },
        },
        {
          provide: IVenueInterface,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<EventFindAllController>(EventFindAllController);
    service = module.get<VenueFindAllService>(VenueFindAllService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
