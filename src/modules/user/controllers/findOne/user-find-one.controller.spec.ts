/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { IUserInterface } from '../../repository/interface/user-interface';
import { UserFindOneService } from '../../services/find-one/user-find-one.service';
import { UserFindOneController } from './user-find-one.controller';

describe('UserOneController', () => {
  let controller: UserFindOneController;
  let service: UserFindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFindOneController],
      providers: [
        UserFindOneService,
        {
          provide: IUserInterface,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UserFindOneController>(UserFindOneController);
    service = module.get<UserFindOneService>(UserFindOneService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
