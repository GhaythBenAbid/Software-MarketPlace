import { NestFactory } from '@nestjs/core';
import { CommandeServiceModule } from './commande_service.module';

async function bootstrap() {
  const app = await NestFactory.create(CommandeServiceModule);
  await app.listen(3003);
}
bootstrap();
