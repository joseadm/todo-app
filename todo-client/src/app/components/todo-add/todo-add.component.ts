import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Todo } from "../../models/todo";
import { TodoService } from "../../services/todo.service";
import * as fromStore from "../../store";
import * as moment from 'moment';

import { Observable } from "rxjs";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  title: string = "";
  todoDate: string = "";
  description: string = "";

  constructor(private _todoService: TodoService, private store: Store<any>) {}

  ngOnInit() {

  }

  addTask() {
    this.store.dispatch(new fromStore.addTodo({ 
      id: null,
      title: this.title, 
      todoDate: new Date(this.todoDate), 
      description: this.description,  
      completed: false,
      createdDate: moment().toDate()
    }));

    this.title = "";
    this.todoDate = "";
    this.description = "";
  }

}
