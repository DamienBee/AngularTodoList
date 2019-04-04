import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest, HttpResponse, HttpXhrBackend } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Todo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = 'http://fakeurl/todos';
  private httpClient = new HttpClient(new MockedHttpXhrBackend({ build: () => new XMLHttpRequest() }));

  constructor( ) { }
  
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.todoUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  /**
   * Handle mocked backend errors
   * @param err 
   */
  private handleError(err: HttpErrorResponse) {
    let errorMessage = `An error occurred: ${err}`;
    console.error(errorMessage);
    
    return throwError(errorMessage);
  }
}

/**
 * Simulate calls to the backend.
 */
export class MockedHttpXhrBackend extends HttpXhrBackend {

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const todoUrl = 'http://fakeurl/todos';
    let response;
    switch (req.url) {

      case todoUrl:
        // To be refactored so todo updates can be seen in further todo get
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

        response = new HttpResponse<Array<Todo>>({ body: todos });
        break;
      default:
        response = new HttpErrorResponse({ error: "URL not mocked" });
        return throwError("URL not mocked");
    }
    const obs = new Observable<HttpEvent<any>>(observer => { observer.next(response) });
    return obs;
  }
}