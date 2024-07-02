import { Test, TestingModule } from '@nestjs/testing';
import { UserFindAllController } from './user-find-all.controller';

describe('UserFindAllController', () => {
  let controller: UserFindAllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFindAllController],
    }).compile();

    controller = module.get<UserFindAllController>(UserFindAllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
