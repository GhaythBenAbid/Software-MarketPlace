import { Controller, Get } from '@nestjs/common';
import { ProduitServiceService } from './produit_service.service';

@Controller()
export class ProduitServiceController {
  constructor(private readonly produitServiceService: ProduitServiceService) {}

  @Get()
  getHello(): string {
    return this.produitServiceService.getHello();
  }
}
