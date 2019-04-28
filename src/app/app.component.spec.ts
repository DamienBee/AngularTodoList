import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemTodoService } from './todos/todo-in-mem-data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        TodoModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(InMemTodoService)
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});