import * as todo_action from "../actions";
import { Todo } from "../../models/todo";

export interface TodoState {
    todo: Todo[];
    loading: boolean;
    loaded: boolean;
}

export const initialState: TodoState = {
    todo: [],
    loading: false,
    loaded: false
};

export function reducers(state = initialState, action: todo_action.TodoActionTypes): TodoState {
    switch (action.type) {
      // TO DO LOAD CASES
      case todo_action.TODO_LOAD: {
        return {
          ...state,
          loading: true
        };
      }
      case todo_action.TODO_LOAD_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false
        };
      }
      case todo_action.TODO_LOAD_SUCCESS: {
        const todo = [...state.todo, ...action.payload];
        return {
          ...state,
          todo,
          loading: false,
          loaded: true
        };
      }
  
      // TODO ADD CASES
      case todo_action.TODO_ADD: {
        return {
          ...state,
          loading: true,
          loaded: false
        };
      }
      case todo_action.TODO_ADD_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false
        };
      }
      case todo_action.TODO_ADD_SUCCESS: {
        let todo = [...state.todo, action.payload];
        return {
          ...state,
          todo,
          loading: false,
          loaded: true
        };
      }


    // TO DO UPDATE CASES
    case todo_action.TODO_UPDATE: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case todo_action.TODO_UPDATE_FAIL: {
      return state;
    }
    case todo_action.TODO_UPDATE_SUCCESS: {
      let todo = state.todo.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todo,
        loaded: true,
        loading: false
      };
    }
  
      // TO DO REMOVE CASES
      case todo_action.TODO_REMOVE_TODO: {
        return {
          ...state,
          loading: true,
          loaded: false
        };
      }
      case todo_action.TODO_REMOVE_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false
        };
      }
      case todo_action.TODO_REMOVE_SUCCESS: {
        let todo = state.todo.filter(todo => {
          return todo.id !== action.payload
        });
        return {
          ...state,
          todo,
          loading: false,
          loaded: true
        };
      }
    }
    //default return if case not match
    return state;
  }
  

