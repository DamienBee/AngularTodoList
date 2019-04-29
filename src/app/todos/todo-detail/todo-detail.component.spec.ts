import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { TodosStoreService } from '../todos-store.service';
import { TodoDetailComponent } from './todo-detail.component';


describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailComponent],
      imports: [
        MatCardModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [{ provide: TodosStoreService, useClass: MockTodosStoreService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class MockTodosStoreService extends TodosStoreService {
}
