import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import FindOneParams from 'src/utils/findOneParams';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTasksById(@Param() { id }: FindOneParams) {
    return this.taskService.getTaskById(Number(id));
  }

  @Post()
  async createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    return this.taskService.updateTask(Number(id), task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(Number(id));
  }
}
