import { Test, TestingModule } from '@nestjs/testing';
import { UserDeleteController } from './user-delete.controller';

describe('UserDeleteController', () => {
  let controller: UserDeleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDeleteController],
    }).compile();

    controller = module.get<UserDeleteController>(UserDeleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
