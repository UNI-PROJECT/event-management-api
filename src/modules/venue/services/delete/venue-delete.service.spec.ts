import { Test, TestingModule } from '@nestjs/testing';
import { VenueDeleteService } from './venue-delete.service';
import { IVenueInterface } from '../../repository/interface/vanue-interface';

describe('EventDeleteService', () => {
  let service: VenueDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VenueDeleteService,
        {
          provide: IVenueInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<VenueDeleteService>(VenueDeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
