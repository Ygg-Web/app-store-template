import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    return await this.roleRepository.create(dto);
  }

  async getRoles() {
    return await this.roleRepository.findAll();
  }

  async getRoleByName(name: string) {
    return await this.roleRepository.findOne({ where: { name } });
  }
}
