
import { Action } from '@ngrx/store';

export const initialState = false;

export function todoReducer(state, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}