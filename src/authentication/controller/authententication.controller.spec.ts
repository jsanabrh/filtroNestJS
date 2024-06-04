import { Test, TestingModule } from '@nestjs/testing';
import { AuthententicationController } from './authententication.controller';

describe('AuthententicationController', () => {
  let controller: AuthententicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthententicationController],
    }).compile();

    controller = module.get<AuthententicationController>(AuthententicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
