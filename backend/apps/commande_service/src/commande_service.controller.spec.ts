import { Test, TestingModule } from '@nestjs/testing';
import { CommandeServiceController } from './commande_service.controller';
import { CommandeServiceService } from './commande_service.service';

describe('CommandeServiceController', () => {
  let commandeServiceController: CommandeServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommandeServiceController],
      providers: [CommandeServiceService],
    }).compile();

    commandeServiceController = app.get<CommandeServiceController>(CommandeServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(commandeServiceController.getHello()).toBe('Hello World!');
    });
  });
});
