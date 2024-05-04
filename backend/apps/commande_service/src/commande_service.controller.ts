import { Controller, Get } from '@nestjs/common';
import { CommandeServiceService } from './commande_service.service';

@Controller()
export class CommandeServiceController {
  constructor(private readonly commandeServiceService: CommandeServiceService) {}
}
