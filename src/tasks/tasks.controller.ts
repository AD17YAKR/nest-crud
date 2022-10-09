import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { createTaskDto } from "./dto/create-task.dto";
import { Task } from "./tasks.model";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}
  helloWorld() {
    // this.tasksService.doSomething();
  }
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get("/:id")
  getTaskById(@Param("id") id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: createTaskDto): Task {
    // console.log(createTaskDto.title);
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete()
  deleteTask(@Param("id") id: string): void {
    return this.tasksService.deleteTask(id);
  }
}

// @Get('')
