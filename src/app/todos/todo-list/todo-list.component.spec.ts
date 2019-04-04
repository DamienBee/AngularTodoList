import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MatCheckboxModule, MatDividerModule, MatListModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from '../state/todo.effects';

/**
 * Simulate the behavior of TodoService
 */
class MockTodoService extends TodoService {
  getTodos(): Observable<Todo[]> {
    let todos: Array<Todo> = [];
    let todo1 = new Todo();
    todo1.title = "Make a great Appli";
    let todo2 = new Todo();
    todo2.title = "Install visual studio";
    todo2.finished = true;
    let todo3 = new Todo();
    todo3.title = "Send the result";
    todos.push(todo1);
    todos.push(todo2);
    todos.push(todo3);

    const obs = new Observable<Todo[]>(observer => { observer.next(todos) });
    return obs;
  }
}

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  const mockTodoService = new MockTodoService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([TodoEffects])
      ],
      providers: [ {provide: TodoService, useValue: mockTodoService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('todo list should contains initial todos', () => {
    expect(component.todos$.subscribe.length).toEqual(3);
  });
});
