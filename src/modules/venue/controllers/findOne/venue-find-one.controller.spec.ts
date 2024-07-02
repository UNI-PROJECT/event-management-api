/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { IVenueInterface } from '../../repository/interface/vanue-interface';
import { VenueFindOneService } from '../../services/find-one/venue-find-one.service';
import { VenueFindOneController } from './venue-find-one.controller';

describe('UserOneController', () => {
  let controller: VenueFindOneController;
  let service: VenueFindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenueFindOneController],
      providers: [
        VenueFindOneService,
        {
          provide: IVenueInterface,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<VenueFindOneController>(VenueFindOneController);
    service = module.get<VenueFindOneService>(VenueFindOneService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
