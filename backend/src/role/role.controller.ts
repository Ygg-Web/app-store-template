import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './role.model';

@ApiTags('Роли')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 200, type: [Role] })
  @Post()
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  @ApiOperation({ summary: 'Get roles' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get()
  getRoles() {
    return this.roleService.getRoles();
  }

  @ApiOperation({ summary: 'Get role by name' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get('/:name')
  getRoleByName(@Param('name') name: string) {
    return this.roleService.getRoleByName(name);
  }
}
