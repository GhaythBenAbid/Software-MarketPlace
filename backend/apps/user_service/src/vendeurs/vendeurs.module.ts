import { Module } from '@nestjs/common';
import { VendeursService } from './vendeurs.service';
import { VendeursResolver } from './vendeurs.resolver';
import { Vendeur } from '@app/my-library/entites/vendeur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [VendeursResolver, VendeursService],
  imports: [
    TypeOrmModule.forFeature([Vendeur])
  ],
})
export class VendeursModule {}
