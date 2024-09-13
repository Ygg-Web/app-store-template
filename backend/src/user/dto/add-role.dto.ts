import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'user', description: 'Role name' })
  @IsString({ message: 'Должно быть строкой'})
  readonly name: string;
  @ApiProperty({ example: '1', description: 'Indentificator' })
  @IsNumber({}, { message: 'Должно быть числом'})
  readonly userId: string;
}
