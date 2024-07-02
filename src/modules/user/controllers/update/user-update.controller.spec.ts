import { Test, TestingModule } from '@nestjs/testing';
import { UserFindUpdateController } from './user-update.controller';

describe('UserFindUpdateController', () => {
  let controller: UserFindUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFindUpdateController],
    }).compile();

    controller = module.get<UserFindUpdateController>(UserFindUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
