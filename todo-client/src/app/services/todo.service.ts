import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../models/todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/todo/";
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  getTodos() {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  updateTodo(id: string, completed: boolean) {
    return this.http.put<Todo>(this.baseUrl + id, {completed: completed});
  }

  deleteTodo(id: string) {
    return this.http.delete<Todo>(this.baseUrl + id);
  }
}