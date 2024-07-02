import { Test, TestingModule } from '@nestjs/testing';
import { UserFindOneService } from './user-find-one.service';
import { IUserInterface } from '../../repository/interface/user-interface';

describe('UserFindOneService', () => {
  let service: UserFindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserFindOneService,
        {
          provide: IUserInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserFindOneService>(UserFindOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
