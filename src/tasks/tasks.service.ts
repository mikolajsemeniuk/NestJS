import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { TaskInput } from './task.input';

@Injectable()
export class TasksService {
    tasks: Task[] = []
    
    getTasks(): Task[] {
        return this.tasks
    }

    getTaskById(id: string): Task | null {
        return this.tasks.find(task => task.id === id)
    }

    createTask(input: TaskInput): Task {
        const { title, description } = input
        const task: Task = {
            id: uuid(),
            title: title,
            description: description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task)
        return task
    }

    updateTask(id: string, input: TaskInput): Task {
        const { title, description } = input
        const index = this.tasks.findIndex(task => task.id === id)

        this.tasks[index].title = title
        this.tasks[index].description = description

        return this.tasks[index]
    }

    removeTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id === id)
    }

    // public createTask(title: string, description: string): Task {
    //     const task: Task = {
    //         id: uuid(),
    //         title: title,
    //         description: description,
    //         status: TaskStatus.OPEN
    //     }
    //     this.tasks.push(task)
    //     return task
    // }
}
