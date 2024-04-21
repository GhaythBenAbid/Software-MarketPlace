import { Injectable } from '@nestjs/common';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '@app/my-library/entites/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) { }
  create(createAdminInput: Admin) {
    return this.adminsRepository.save(createAdminInput);
  }

  findAll() {
    return this.adminsRepository.find();
  }

  findOne(id: number) {
    return this.adminsRepository.findOne({ where: { id } });
  }

  update(id: number, updateAdminInput: Admin) {
    return this.adminsRepository.update(id, updateAdminInput);
  }

  remove(id: number) {
    return this.adminsRepository.delete(id);
  }
}
