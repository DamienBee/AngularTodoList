import { Action } from '@ngrx/store';
import { Todo } from '../todo';

export enum TodoActionTypes {
    GetTodos = '[Todo] Get todos',    
    LoadSuccess = '[Todo] Load success'
}

export class GetTodos implements Action {
    readonly type = TodoActionTypes.GetTodos; 
}

export class LoadSuccess implements Action {
  readonly type = TodoActionTypes.LoadSuccess;

  constructor(public payload: Todo[]) { }
}

export type TodoActions = GetTodos
  | LoadSuccess;