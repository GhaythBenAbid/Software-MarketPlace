import { Test, TestingModule } from '@nestjs/testing';
import { ProduitServiceController } from './produit_service.controller';
import { ProduitServiceService } from './produit_service.service';

describe('ProduitServiceController', () => {
  let produitServiceController: ProduitServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProduitServiceController],
      providers: [ProduitServiceService],
    }).compile();

    produitServiceController = app.get<ProduitServiceController>(ProduitServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(produitServiceController.getHello()).toBe('Hello World!');
    });
  });
});
