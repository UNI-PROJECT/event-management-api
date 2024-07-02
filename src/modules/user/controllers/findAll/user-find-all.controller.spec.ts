import { Test, TestingModule } from '@nestjs/testing';
import { UserFindAllController } from './user-find-all.controller';
import { UserFindAllService } from '../../services/find-all/user-find-all.service';
import { IUserInterface } from '../../repository/interface/user-interface';

describe('UserFindAllController', () => {
  let controller: UserFindAllController;
  let service: UserFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFindAllController],
      providers: [
        {
          provide: UserFindAllService,
          useValue: {
            findAll: jest.fn(),
          },
        },
        {
          provide: IUserInterface,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UserFindAllController>(UserFindAllController);
    service = module.get<UserFindAllService>(UserFindAllService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
