import { Test, TestingModule } from '@nestjs/testing';
import { UserFindOneController } from './user-find-one.controller';

describe('UserFindOneController', () => {
  let controller: UserFindOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFindOneController],
    }).compile();

    controller = module.get<UserFindOneController>(UserFindOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
