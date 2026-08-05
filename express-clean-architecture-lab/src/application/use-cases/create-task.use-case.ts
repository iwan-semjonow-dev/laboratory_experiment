import type { Task } from '../../domain/entities/task.entity.js';
import type {
    CreateTaskData,
    TaskRepository,
} from '../../domain/repositories/task.repository.js';
export class CreateTaskUseCase {
    constructor(private readonly repository: TaskRepository) { }
    execute(data: CreateTaskData): Promise<Task> {
        return this.repository.create(data);
    }
}