import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsResolver } from './clients.resolver';
import { Client } from '@app/my-library/entites/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ClientsResolver, ClientsService],
  imports: [
    TypeOrmModule.forFeature([Client])
  ],
})
export class ClientsModule {
}
