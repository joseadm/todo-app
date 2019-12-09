import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Todo } from "../../models/todo";
import * as fromStore from "../../store";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Observable } from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  editMode: boolean = false;
  active: number;
  todoList: Observable<Todo[]>;
  today: string ;

  constructor(private store: Store<any>) {
    const now = new Date;
    this.today = now.toISOString();
  }

  ngOnInit() {
    this.todoList = this.store.select("todos");
    this.store.dispatch(new fromStore.loadTodos()); 
}

  showEdit(index: number) {
    this.editMode = true;
    this.active = index;
  }

  deleteTodo(id) {
    this.store.dispatch(new fromStore.removeTodo(id));
  }

  updateStatus(id, completed) {
    this.store.dispatch(new fromStore.updateTodo({ id: id, completed: completed }));
  }
}
