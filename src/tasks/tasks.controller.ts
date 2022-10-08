import { Controller, Get } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  helloWorld() {
    // this.tasksService.doSomething();
  }
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}

// @Get('')
