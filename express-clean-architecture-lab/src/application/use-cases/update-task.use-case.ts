import type { Task } from '../../domain/entities/task.entity.js';
import type {
    TaskRepository,
    UpdateTaskData,
} from '../../domain/repositories/task.repository.js';
export class UpdateTaskUseCase {
    constructor(private readonly repository: TaskRepository) { }
    execute(id: number, data: UpdateTaskData): Promise<Task | null> {
        return this.repository.update(id, data);
    }
}