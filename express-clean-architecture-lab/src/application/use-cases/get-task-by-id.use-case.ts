import type { Task } from '../../domain/entities/task.entity.js';
import type { TaskRepository } from '../../domain/repositories/task.repository.js';
export class GetTaskByIdUseCase {
    constructor(private readonly repository: TaskRepository) { }
    execute(id: number): Promise<Task | null> {
        return this.repository.findById(id);
    }
}