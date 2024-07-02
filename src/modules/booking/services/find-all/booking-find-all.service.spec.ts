import { Test, TestingModule } from '@nestjs/testing';
import { BookingFindAllService } from './booking-find-all.service';
import { IBookingInterface } from '../../repository/interface/ticket-interface';

describe('BookingFindAllService', () => {
  let service: BookingFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingFindAllService,
        {
          provide: IBookingInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<BookingFindAllService>(BookingFindAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
