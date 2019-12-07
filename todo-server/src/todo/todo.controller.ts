import { Body, Controller, Get, Post, Put, Delete, Param, Res } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDTO } from './dto/create-todo';

@Controller('todo')
export class TodoController {
  
  constructor(private readonly todoService: TodoService) {}
  
  @Get()
  async findAll() {
    const todos = await this.todoService.findAll();
    return todos;
  }

  @Post()
  async create(@Body() body) {
    console.log(body);
    const todo = await this.todoService.create(body);
    return todo;
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    const todo = await this.todoService.remove(id);
    return todo;
  }
}