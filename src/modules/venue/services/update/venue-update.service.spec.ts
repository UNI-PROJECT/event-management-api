import { Test, TestingModule } from '@nestjs/testing';
import { IVenueInterface } from '../../repository/interface/vanue-interface';
import { VenueUpdateService } from './venue-update.service';

describe('UserUpdateService', () => {
  let service: VenueUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VenueUpdateService,
        {
          provide: IVenueInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<VenueUpdateService>(VenueUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
