import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Todo } from "../../models/todo";
import { TodoService } from "../../services/todo.service";
import * as fromTodo from "../actions";

// RXJS imports
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

@Injectable()
export class TodoEffects {
  constructor(private _todoService: TodoService, private action$: Actions) {}

  @Effect()
  loadTodos$ = this.action$.pipe(
    ofType(fromTodo.TODO_LOAD),
    switchMap(task => {
      return this._todoService.getTodos().pipe(
        map(response => {
          return new fromTodo.loadTodosSuccess(response);
        })
      );
    })
  );
  
  @Effect()
  addTodo$ = this.action$.pipe(
    ofType(fromTodo.TODO_ADD),
    map((action: fromTodo.addTodo) => action.payload),
    switchMap(todo => {
      return this._todoService.addTodo(todo).pipe(
        map(response => {
          return new fromTodo.addTodoSuccess(response);
        }),
        catchError(err => of(new fromTodo.addTodoFail()))
      );
    })
  );

  @Effect()
  updateTodo$ = this.action$.pipe(
    ofType(fromTodo.TODO_UPDATE),
    map((action: fromTodo.updateTodo) => action),
    switchMap(action => {
      return this._todoService.updateTodo(action.payload.id, action.payload.completed).pipe(
        map(response => {
          return new fromTodo.updateTodoSuccess(action.payload);
        }),
        catchError(err => of(new fromTodo.updateTodoFail()))
      );
    })
  );


  @Effect()
  deleteTodo$ = this.action$.pipe(
    ofType(fromTodo.TODO_REMOVE_TODO),
    map((action: fromTodo.removeTodo) => action),
    switchMap(action => {
      return this._todoService.deleteTodo(action.payload).pipe(
        map(response => {
          return new fromTodo.removeTodoSuccess(action.payload);
        }),
        catchError(err => of(new fromTodo.removeTodoFail()))
      );
    })
  );
}
