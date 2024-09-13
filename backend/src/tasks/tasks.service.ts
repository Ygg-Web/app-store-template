import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { FileService } from 'src/file/file.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task) private taskRepository: typeof Task,
    private fileService: FileService,
  ) {}

  async getTasks() {
    return await this.taskRepository.findAll({ include: { all: true } });
  }

  async getTaskById(id: number) {
    return await this.taskRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async createTask(taskDto: CreateTaskDto, image: File) {
    const fileName = await this.fileService.createFile(image);
    return await this.taskRepository.create({ ...taskDto, image: fileName });
  }

  async editTask(id: number, taskDto: CreateTaskDto, image: File) {
    const fileName = await this.fileService.createFile(image);
    let payload = taskDto;
    if (fileName) {
      payload = { ...payload, image: fileName };
    }
    return await this.taskRepository.update(payload, { where: { id } });
  }
}
