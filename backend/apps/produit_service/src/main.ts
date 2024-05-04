import { NestFactory } from '@nestjs/core';
import { ProduitServiceModule } from './produit_service.module';

async function bootstrap() {
  const app = await NestFactory.create(ProduitServiceModule);
  await app.listen(3002);
}
bootstrap();
