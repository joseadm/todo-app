import { ActionReducerMap } from "@ngrx/store";
import * as fromToDo from "./todo.reducers";

export interface ApplicationState {
  todos: fromToDo.TodoState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  todos: fromToDo.reducers
};
