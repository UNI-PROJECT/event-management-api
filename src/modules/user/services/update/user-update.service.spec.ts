import { Test, TestingModule } from '@nestjs/testing';
import { UserUpdateService } from './user-update.service';
import { IUserInterface } from '../../repository/interface/user-interface';

describe('UserUpdateService', () => {
  let service: UserUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserUpdateService,
        {
          provide: IUserInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserUpdateService>(UserUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
