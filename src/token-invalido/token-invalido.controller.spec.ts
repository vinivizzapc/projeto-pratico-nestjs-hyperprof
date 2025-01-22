import { Test, TestingModule } from '@nestjs/testing';
import { TokenInvalidoController } from './token-invalido.controller';
import { TokenInvalidoService } from './token-invalido.service';

describe('TokenInvalidoController', () => {
  let controller: TokenInvalidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenInvalidoController],
      providers: [TokenInvalidoService],
    }).compile();

    controller = module.get<TokenInvalidoController>(TokenInvalidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
