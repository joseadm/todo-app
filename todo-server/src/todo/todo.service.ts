import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}

  // Get data from database
  findAll() {
    return this.todoRepository.find();
  }

  // Save data from database
  create(todo: Todo) {
    return this.todoRepository.save(todo);
  }

  // Update data from database
  update(id: number, completed: boolean) {
    return this.todoRepository.update(id, {completed: !completed});
  }

  // Remove data from database
  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}