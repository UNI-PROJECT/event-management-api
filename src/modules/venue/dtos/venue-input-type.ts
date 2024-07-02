import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVenueDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  adress?: string;

  @IsNumber()
  capacity: number;
}
