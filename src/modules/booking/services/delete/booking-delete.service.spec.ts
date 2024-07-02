import { Test, TestingModule } from '@nestjs/testing';
import { BookingDeleteService } from './booking-delete.service';
import { IBookingInterface } from '../../repository/interface/ticket-interface';

describe('TicketDeleteService', () => {
  let service: BookingDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingDeleteService,
        {
          provide: IBookingInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<BookingDeleteService>(BookingDeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
