import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  startDate: Date;

  endDate: Date;

  @IsUUID()
  venueId: string;
}
