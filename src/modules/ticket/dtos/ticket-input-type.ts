import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  eventId: string;

  @IsString()
  userId: string;

  @IsNumber()
  price: string;

  @IsString()
  type: string;
}
