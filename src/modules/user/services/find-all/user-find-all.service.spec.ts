import { Test, TestingModule } from '@nestjs/testing';
import { UserFindAllService } from './user-find-all.service';
import { IUserInterface } from '../../repository/interface/user-interface';

describe('UserFindAllService', () => {
  let service: UserFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserFindAllService,
        {
          provide: IUserInterface,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserFindAllService>(UserFindAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
