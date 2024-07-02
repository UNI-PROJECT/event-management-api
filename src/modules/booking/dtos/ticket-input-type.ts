import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsString()
  eventId: string;

  @IsNumber()
  totalPrice: string;

  @IsString()
  ticketId: string;

  @IsNumber()
  quantity: number;
}
