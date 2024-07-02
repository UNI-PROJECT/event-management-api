/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { IUserInterface } from '../../repository/interface/user-interface';
import { UserCreateController } from '../create/user-create.controller';
import { UserCreateService } from '../../services/create/user-create.service';

describe('UserOneController', () => {
  let controller: UserCreateController;
  let service: UserCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCreateController],
      providers: [
        UserCreateService,
        {
          provide: IUserInterface,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UserCreateController>(UserCreateController);
    service = module.get<UserCreateService>(UserCreateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
