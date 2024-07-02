import { Test, TestingModule } from '@nestjs/testing';
import { UserFindCreateController } from './user-find-create.controller';

describe('UserFindCreateController', () => {
  let controller: UserFindCreateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFindCreateController],
    }).compile();

    controller = module.get<UserFindCreateController>(UserFindCreateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
