import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({ summary: 'Get tasks'})
  @ApiResponse({ status: 200, type: [Task] })
  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @ApiOperation({ summary: 'Get task by id'})
  @ApiResponse({ status: 200, type: [Task] })
  @Get('/:id')
  getTaskById(@Param('id') id: number) {
    return this.tasksService.getTaskById(id);
  }

  @ApiOperation({ summary: 'Create task'})
  @ApiResponse({ status: 200, type: [Task] })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createTask(@Body() taskDto: CreateTaskDto, @UploadedFile() image: File) {
    return this.tasksService.createTask(taskDto, image);
  }

  @ApiOperation({ summary: 'Edit task'})
  @ApiResponse({ status: 200, type: [Task] })
  @Put('/:id')
  editTask(
    @Body() taskDto: CreateTaskDto,
    @UploadedFile() image: File,
    @Param('id') id: number,
  ) {
    return this.tasksService.editTask(id, taskDto, image);
  }
}
