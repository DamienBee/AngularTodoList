import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Todo } from './todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private TODO_API_URL = 'api/todos';

  constructor(private httpClient: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.TODO_API_URL).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public updateTodo(todo: Todo) {
    return this.httpClient.put<Todo>(this.TODO_API_URL, todo, httpOptions).pipe(
      shareReplay(),
      catchError(this.handleError)
    );
  }

  public create(todo: Todo) {
    return this.httpClient.post<Todo>(this.TODO_API_URL, todo, httpOptions).pipe(
      shareReplay()
    );
  }

  /**
   * Handle backend errors
   * @param err 
   */
  private handleError(err: HttpErrorResponse) {
    let errorMessage = `An error occurred: ${err}`;
    console.error(errorMessage);

    return throwError(errorMessage);
  }
}