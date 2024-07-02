import { Test, TestingModule } from '@nestjs/testing';
import { BookingFindOneService } from './booking-find-one.service';
import { IBookingInterface } from '../../repository/interface/ticket-interface';

describe('BookingFindOneService', () => {
  let service: BookingFindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingFindOneService,
        {
          provide: IBookingInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<BookingFindOneService>(BookingFindOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
