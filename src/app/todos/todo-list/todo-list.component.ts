import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { Observable } from 'rxjs';


import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromTodo from '../state/todo.reducer';
import * as todoActions from '../state/todo.actions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>; 
  componentActive = true;

  constructor(private store: Store<fromTodo.State>) { }

  ngOnInit() {    
    this.todos$ = this.store.pipe(select(fromTodo.getTodos));
    
    this.store.dispatch(new todoActions.GetTodos);
  }
}