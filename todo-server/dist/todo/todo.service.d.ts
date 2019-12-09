import { Repository } from 'typeorm';
import { Todo } from '../entity/todo.entity';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    create(todo: Todo): Promise<Todo>;
    update(id: number, completed: boolean): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
