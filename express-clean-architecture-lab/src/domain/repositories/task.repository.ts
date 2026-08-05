import type { Task } from '../entities/task.entity.js';
export interface CreateTaskData {
    title: string;
    description?: string;
}
export interface UpdateTaskData {
    title?: string;
    description?: string;
    isCompleted?: boolean;
}
export interface TaskRepository {
    findAll(): Promise<Task[]>;
    findById(id: number): Promise<Task | null>;
    create(data: CreateTaskData): Promise<Task>;
    update(id: number, data: UpdateTaskData): Promise<Task | null>;
    delete(id: number): Promise<boolean>;
}
