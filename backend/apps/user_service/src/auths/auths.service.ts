import { Injectable } from '@nestjs/common';
import { LoginInput } from './dto/login.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '@app/my-library/entites/client.entity';
import { Repository } from 'typeorm';
import { Vendeur } from '@app/my-library/entites/vendeur.entity';
import { Admin } from '@app/my-library/entites/admin.entity';
import { Auth } from './dto/auth.entity';
import * as bcrypt from 'bcrypt';
import { RegisterInput } from './dto/register.input';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthsService {
  constructor(
    @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
    @InjectRepository(Admin) private readonly AdminRepository: Repository<Admin>,
    @InjectRepository(Vendeur) private readonly vendeurRepository: Repository<Vendeur>,
    private jwtService: JwtService,
  ) {}

  secret = 'e5vhkbWXB5YKKqIO7uUZ';

  async login(loginInput: LoginInput) {
    let user: Auth = null;
    let type: string = null;


    await this.clientRepository.findOne({ where: { email: loginInput.email } }).then((client) => {
      if (client) {
        user = client;
        type = 'client';
      }
    });

    await this.AdminRepository.findOne({ where: { email: loginInput.email } }).then((admin) => {
      if (admin) {
        user = admin;
        type = 'admin';
      }
    });

    await this.vendeurRepository.findOne({ where: { email: loginInput.email } }).then((vendeur) => {
      if (vendeur) {
        user = vendeur;
        type = 'vendeur';
      }
    });


    if (!user) {
      throw new Error('User not found');
    }

    if (!bcrypt.compareSync(loginInput.password, user.motdepasse)) {
      throw new Error('Invalid password');
    } else {
      const payload = { email: user.email, sub: user.id };
      user.token = await this.jwtService.signAsync(payload);
      user.type = type;
      return user;
    }
  }

  async register(type: string, registerInput: RegisterInput) {

    if (await this.verifyDoesEmailExist(registerInput.email)) {
      throw new Error('Email already exists');
    }


    registerInput.motdepasse = bcrypt.hashSync(registerInput.motdepasse, 10);

    switch (type) {
      case 'client':
        return this.clientRepository.save(registerInput);
      case 'admin':
        return this.AdminRepository.save(registerInput);
      case 'vendeur':
        return this.vendeurRepository.save(registerInput);
      default:
        throw new Error('Type not found');




    }
  }


  async verifyDoesEmailExist(email: string) {
    let exist = false;

    await this.clientRepository.findOne({ where: { email: email } }).then((client) => {
      if (client) {
        exist = true;
      }
    });

    await this.AdminRepository.findOne({ where: { email: email } }).then((admin) => {
      if (admin) {
        exist = true;
      }
    });

    await this.vendeurRepository.findOne({ where: { email: email } }).then((vendeur) => {
      if (vendeur) {
        exist = true;
      }
    });

    return exist;
  }

}
