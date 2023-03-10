import { HttpStatus, HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Task from './task.entity';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) { }

  getAllTasks() {
    return this.taskRepository.find();
  }

  async getTaskById(id: number) {
    const task = this.taskRepository.findOne(
      {
        where: { id, }
      }
    );
    if (task) {
      return task;
    }
    throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
  }

  async createTask(task: CreateTaskDto) {
    const newTask = this.taskRepository.create(task);
    await this.taskRepository.save(newTask);
    return newTask;
  }

  async updateTask(id: number, task: UpdateTaskDto) {
    await this.taskRepository.update(id, task);
    const updatedTask = await this.taskRepository.findOne({
      where: { id, }
    })
    if (updatedTask) {
      return updatedTask;
    }
    throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
  }

  async deleteTask(TaskId: number) {
    const deleteResponse = await this.taskRepository.delete(TaskId);
    if (!deleteResponse.affected) {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }
  }
}
