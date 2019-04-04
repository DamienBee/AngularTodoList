import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { TodoService } from '../todo.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as todoActions from './todo.actions';

@Injectable()
export class TodoEffects {

  constructor(private todoService: TodoService,
              private actions$: Actions) { }

  @Effect()
  getTodos$: Observable<Action> = this.actions$.pipe(
    ofType(todoActions.TodoActionTypes.GetTodos),
    mergeMap(action =>
      this.todoService.getTodos().pipe(
        map(todos => (new todoActions.LoadSuccess(todos)))
      )
    )
  );
}