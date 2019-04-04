
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../todo';
import { TodoActions, TodoActionTypes } from './todo.actions';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
    todos: TodoState;
  }

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [{
        title: "Example Todo",
        description: "Example Todo before requesting from server",
        finished: false
    }]
};

// Selector functions
const getTodoFeatureState = createFeatureSelector<TodoState>('todos');

export const getTodos = createSelector(
    getTodoFeatureState,
    state => state.todos
);

export function todoReducer(state = initialState, action: TodoActions): TodoState {
    switch (action.type) {
        case TodoActionTypes.LoadSuccess:
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
}

