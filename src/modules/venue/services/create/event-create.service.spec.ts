import { Test, TestingModule } from '@nestjs/testing';
import { IVenueInterface } from '../../repository/interface/vanue-interface';
import { VenueCreateService } from './event-create.service';

describe('EventCreateService', () => {
  let service: VenueCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VenueCreateService,
        {
          provide: IVenueInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<VenueCreateService>(VenueCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
