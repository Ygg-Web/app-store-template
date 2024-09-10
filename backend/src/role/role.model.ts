import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { UserRoles } from './user-roles.model';

interface RoleCreation {
  name: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreation> {
  @ApiProperty({ example: '1', description: 'Indentificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user', description: 'Role name' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @ApiProperty({ example: '', description: 'Role description' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  user: User[];
}
