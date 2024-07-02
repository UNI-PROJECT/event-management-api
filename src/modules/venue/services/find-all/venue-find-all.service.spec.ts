import { Test, TestingModule } from '@nestjs/testing';
import { VenueFindAllService } from './venue-find-all.service';
import { IVenueInterface } from '../../repository/interface/vanue-interface';

describe('EventFindAllService', () => {
  let service: VenueFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VenueFindAllService,
        {
          provide: IVenueInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<VenueFindAllService>(VenueFindAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
