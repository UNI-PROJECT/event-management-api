import { User } from '@prisma/client';
import { CreateUserDto } from '../../dtos/user-input-type';

export abstract class IUserInterface {
  abstract create(data: CreateUserDto): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: string): Promise<User>;
  abstract update(id: string, data: CreateUserDto): Promise<User>;
  abstract delete(id: string): Promise<void>;
}
