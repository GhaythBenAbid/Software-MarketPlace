import { Module } from '@nestjs/common';
import { ReclamationsService } from './reclamations.service';
import { ReclamationsResolver } from './reclamations.resolver';
import { Reclamation } from '@app/my-library/entites/reclamation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '@app/my-library/entites/client.entity';

@Module({
  providers: [ReclamationsResolver, ReclamationsService],
  imports: [
    TypeOrmModule.forFeature([Reclamation , Client]),

  ],
})
export class ReclamationsModule {}
