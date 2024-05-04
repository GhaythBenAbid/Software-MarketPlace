import { Admin } from '@app/my-library/entites/admin.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import * as bcrypt from 'bcrypt';



@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) { }
  create(admin: CreateAdminInput) {
    admin.motdepasse = bcrypt.hashSync(admin.motdepasse, 10);
    return this.adminsRepository.save(admin);
  }

  findAll() {
    return this.adminsRepository.find();
  }

  findOne(id: number) {
    return this.adminsRepository.findOne({ where: { id } });
  }

  update(id: number, updateAdminInput: UpdateAdminInput) {
    return this.adminsRepository.update(id, updateAdminInput);
  }

  remove(id: number) {
    return this.adminsRepository.delete(id);
  }
}
