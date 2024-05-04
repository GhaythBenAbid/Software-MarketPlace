import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsResolver } from './auths.resolver';
import { Vendeur } from '@app/my-library/entites/vendeur.entity';
import { Admin } from '@app/my-library/entites/admin.entity';
import { Client } from '@app/my-library/entites/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client, Admin, Vendeur]),
    JwtModule.register({
      global: true,
      secret: 'e5vhkbWXB5YKKqIO7uUZ',
      signOptions: { expiresIn: '60d' },
    }),
  ],
  providers: [AuthsResolver, AuthsService],
})
export class AuthsModule {}
