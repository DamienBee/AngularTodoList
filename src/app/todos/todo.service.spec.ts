import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [TodoService]
  }));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });

});
