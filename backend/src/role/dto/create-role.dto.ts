import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'user', description: 'Role name' })
  readonly name: string;
  @ApiProperty({ example: '', description: 'Role description' })
  readonly description: string;
}
