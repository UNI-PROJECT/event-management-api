import { Test, TestingModule } from '@nestjs/testing';
import { UserDeleteService } from './user-delete.service';
import { IUserInterface } from '../../repository/interface/user-interface';

describe('UserDeleteService', () => {
  let service: UserDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserDeleteService,
        {
          provide: IUserInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserDeleteService>(UserDeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
