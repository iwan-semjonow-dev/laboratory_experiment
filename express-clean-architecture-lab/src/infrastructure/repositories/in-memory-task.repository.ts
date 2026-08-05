import type { Task } from '../../domain/entities/task.entity.js';
import type {
    CreateTaskData,
    TaskRepository,
    UpdateTaskData,
} from '../../domain/repositories/task.repository.js';

export class InMemoryTaskRepository implements TaskRepository {
    private tasks: Task[] = [];
    private nextId = 1;

    async findAll(): Promise<Task[]> {
        return [...this.tasks];
    }
    
    async findById(id: number): Promise<Task | null> {
        return this.tasks.find((task) => task.id === id) ?? null;
    }

    async create(data: CreateTaskData): Promise<Task> {
        const task: Task = {
            id: this.nextId++,
            title: data.title,
            description: data.description ?? '',
            isCompleted: false,
            createdAt: new Date(),
        };
        this.tasks.push(task);
        return task;
    }

    async update(id: number, data: UpdateTaskData): Promise<Task | null> {
        const task = await this.findById(id);
        if (!task) {
            return null;
        }
        if (data.title !== undefined) {
            task.title = data.title;
        }
        if (data.description !== undefined) {
            task.description = data.description;
        }
        if (data.isCompleted !== undefined) {
            task.isCompleted = data.isCompleted;
        }
        return task;
    }

    async delete(id: number): Promise<boolean> {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex === -1) {
            return false;
        }
        this.tasks.splice(taskIndex, 1);
        return true;
    }
}
