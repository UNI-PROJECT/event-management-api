import { Test, TestingModule } from '@nestjs/testing';
import { BookingCreateService } from './booking-create.service';
import { IBookingInterface } from '../../repository/interface/ticket-interface';

describe('BookingCreateService', () => {
  let service: BookingCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingCreateService,
        {
          provide: IBookingInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<BookingCreateService>(BookingCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
