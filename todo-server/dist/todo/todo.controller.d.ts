import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<import("../entity/todo.entity").Todo[]>;
    create(body: any): Promise<import("../entity/todo.entity").Todo>;
    remove(id: any): Promise<import("typeorm").DeleteResult>;
}
