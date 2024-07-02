import { Venue } from '@prisma/client';
import { CreateVenueDto } from '../../dtos/venue-input-type';

export abstract class IVenueInterface {
  abstract create(data: CreateVenueDto): Promise<Venue>;
  abstract findAll(): Promise<Venue[]>;
  abstract findOne(id: string): Promise<Venue>;
  abstract update(id: string, data: CreateVenueDto): Promise<Venue>;
  abstract delete(id: string): Promise<void>;
}
