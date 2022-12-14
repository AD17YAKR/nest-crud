import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./tasks.model";
import { v4 as uuid } from "uuid";
import { createTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }
  getTaskById(id: string) {
    return this.tasks.find((task) => task.id == id);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  createTask(createTaskDto: createTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
