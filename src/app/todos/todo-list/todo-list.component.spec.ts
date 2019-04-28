import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatCheckboxModule, MatDividerModule, MatListModule } from '@angular/material';
import { TodoService } from '../todo.service';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatListModule
      ],
      providers: [ {provide: TodoService}]
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
  
  // it('todo list should contains initial todos', () => {
  //   expect(component.todoList.subscribe.length).toEqual(3);
  // });
});
