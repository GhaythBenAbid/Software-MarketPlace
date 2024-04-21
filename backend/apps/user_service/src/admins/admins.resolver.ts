import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminsService } from './admins.service';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { Admin } from '@app/my-library/entites/admin.entity';

@Resolver(() => Admin)
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) {}

  @Mutation(() => Admin)
  createAdmin(@Args('createAdminInput') createAdminInput: Admin) {
    return this.adminsService.create(createAdminInput);
  }

  @Query(() => [Admin], { name: 'admins' })
  findAll() {
    return this.adminsService.findAll();
  }

  @Query(() => Admin, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminsService.findOne(id);
  }

  @Mutation(() => Admin)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: Admin) {
    return this.adminsService.update(updateAdminInput.id, updateAdminInput);
  }

  @Mutation(() => Admin)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminsService.remove(id);
  }
}
