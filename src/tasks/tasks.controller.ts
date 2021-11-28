import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TaskInput } from './task.input';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(): Task[] {
        return this.tasksService.getTasks()
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task | null {
        return this.tasksService.getTaskById(id)
    }

    // EXAMPLE
    // @Post()
    // @Query() status: TaskStatus
    // @Query() status: TaskStatus
    // createTask(@Body('title') title: string, @Body('description') description: string): Task {
    //     return this.tasksService.createTask(title, description);
    // }

    @Post()
    createTask(@Body() taskInput: TaskInput): Task {
        return this.tasksService.createTask(taskInput);
    }

    @Put('/:id')
    updateTask(@Param('id') id: string, @Body() input: TaskInput): Task {
        return this.tasksService.updateTask(id, input)
    }

    @Delete('/:id')
    removeTask(@Param('id') id: string): void {
        this.tasksService.removeTask(id)
    }
}
