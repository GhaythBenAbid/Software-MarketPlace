import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsResolver } from './admins.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '@app/my-library/entites/admin.entity';

@Module({
  providers: [AdminsResolver, AdminsService],
  imports : [
    TypeOrmModule.forFeature([Admin])
  ]
})
export class AdminsModule {}
