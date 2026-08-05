import type { TaskRepository } from '../../domain/repositories/task.repository.js';
export class DeleteTaskUseCase {
    constructor(private readonly repository: TaskRepository) { }
    execute(id: number): Promise<boolean> {
        return this.repository.delete(id);
    }
}
