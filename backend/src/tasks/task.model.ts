import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  Model,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/user/user.model';

interface TaskCreationAttrs {
  name: string;
  description: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Indentificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Имя задания', description: 'Name task' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Описание задания', description: 'description task' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({ example: 'Изображение.png', description: 'description task' })
  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
