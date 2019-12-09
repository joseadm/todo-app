import { Body, Controller, Get, Post, Put, Delete, Param, Res } from '@nestjs/common';
import { TodoService } from './todo.service';

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
    const todo = await this.todoService.create(body);
    return todo;
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body) {
    const todo = await this.todoService.update(id, body.completed);
    return todo;
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    const todo = await this.todoService.remove(id);
    return todo;
  }
}