import { Test, TestingModule } from '@nestjs/testing';
import { UserFindDeleteController } from './user-find-delete.controller';

describe('UserFindDeleteController', () => {
  let controller: UserFindDeleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFindDeleteController],
    }).compile();

    controller = module.get<UserFindDeleteController>(UserFindDeleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
