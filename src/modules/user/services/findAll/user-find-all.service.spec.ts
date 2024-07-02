import { Test, TestingModule } from '@nestjs/testing';
import { UserFindAllService } from './user-find-all.service';

describe('UserFindAllService', () => {
  let service: UserFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFindAllService],
    }).compile();

    service = module.get<UserFindAllService>(UserFindAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
