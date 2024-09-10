import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Email user' })
  readonly email: string;
  @ApiProperty({ example: '12345678', description: 'Password user' })
  readonly password: string;
}
