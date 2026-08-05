import type { Task } from '../../domain/entities/task.entity.js';
import type { TaskRepository } from '../../domain/repositories/task.repository.js';
export class GetAllTasksUseCase {
    constructor(private readonly repository: TaskRepository) { }
    execute(): Promise<Task[]> {
        return this.repository.findAll();
    }
}