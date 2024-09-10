import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'user', description: 'Role name' })
  readonly name: string;
  @ApiProperty({ example: '1', description: 'Indentificator' })
  readonly userId: string;
}
