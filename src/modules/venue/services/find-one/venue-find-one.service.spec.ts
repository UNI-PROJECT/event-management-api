import { Test, TestingModule } from '@nestjs/testing';
import { VenueFindOneService } from './venue-find-one.service';
import { IVenueInterface } from '../../repository/interface/vanue-interface';

describe('EventFindOneService', () => {
  let service: VenueFindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VenueFindOneService,
        {
          provide: IVenueInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<VenueFindOneService>(VenueFindOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
