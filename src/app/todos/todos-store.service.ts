import { Injectable } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { uuid } from './uuid';
import { Todo } from './todo';
import { TodoService } from './todo.service';

/**
 * Take from https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8
 */
@Injectable({ providedIn: 'root' })
export class TodosStoreService {

    constructor(private todoService: TodoService) {
        this.fetchAll()
    }

    // - We set the initial state in BehaviorSubject's constructor
    // - Nobody outside the Store should have access to the BehaviorSubject 
    //   because it has the write rights
    // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
    // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
    //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
    private readonly _todos = new BehaviorSubject<Todo[]>([]);

    // Expose the observable$ part of the _todos subject (read only stream)
    readonly todos$: Observable<Todo[]> = this._todos.asObservable();


    // we'll compose the todos$ observable with map operator to create a stream of only completed todos
    readonly todosFinished$ = this.todos$.pipe(
        map(todos => this.todos.filter(todo => todo.isFinished))
    )

    readonly todosNotFinished$ = this.todos$.pipe(
        map(todos => this.todos.filter(todo => !todo.isFinished))
    )

    // The getter will return the last value emitted in _todos subject
    get todos(): Todo[] {
        return this._todos.getValue();
    }


    // Assigning a value to this.todos will push it onto the observable 
    // and down to all of its subsribers (ex: this.todos = [])
    set todos(val: Todo[]) {
        this._todos.next(val);
    }

    // Get a Todo from its ID
    findTodo(id: string) {
        return this.todos.find(t => t.id === id);
    }

    //   async addTodo(title: string) {

    //     if(title && title.length) {

    //       // This is called an optimistic update
    //       // updating the record locally before actually getting a response from the server
    //       // this way, the interface seems blazing fast to the enduser
    //       // and we just assume that the server will return success responses anyway most of the time.
    //       // if server returns an error, we just revert back the changes in the catch statement 

    //       const tmpId = uuid();
    //       const tmpTodo = {id: tmpId, title, isCompleted: false};

    //       this.todos = [
    //         ...this.todos, 
    //         tmpTodo
    //       ];

    //       try {
    //         const todo = await this.todoService
    //           .create({title, isCompleted: false})
    //           .toPromise();

    //         // we swap the local tmp record with the record from the server (id must be updated)
    //         const index = this.todos.indexOf(this.todos.find(t => t.id === tmpId));
    //         this.todos[index] = {
    //           ...todo
    //         }
    //         this.todos = [...this.todos];
    //       } catch (e) {
    //         // is server sends back an error, we revert the changes
    //         console.error(e);
    //         this.removeTodo(tmpId, false);
    //       }

    //     }

    //   }

    //   async removeTodo(id: string, serverRemove = true) {
    //     // optimistic update
    //     const todo = this.todos.find(t => t.id === id);
    //     this.todos = this.todos.filter(todo => todo.id !== id);

    //     if(serverRemove) {
    //       try {
    //         await this.todoService.remove(id).toPromise();
    //       } catch (e) {
    //         console.error(e);
    //         this.todos = [...this.todos, todo];
    //       }

    //     }

    //   }

    async setFinished(event: MatCheckboxChange, todo: Todo) {
        const isFinished = event.checked;
        if (todo) {
            // optimistic update
            const index = this.todos.indexOf(todo);

            this.todos[index] = {
                ...todo,
                isFinished
            }

            this.todos = [...this.todos];

            try {
                await this.todoService
                    .updateTodo(todo)
                    .toPromise();
            } catch (e) {
                console.error(e);
                this.todos[index] = {
                    ...todo,
                    isFinished: !isFinished
                }
            }
        }
    }

    async fetchAll() {
        this.todos = await this.todoService.getTodos().toPromise();
        console.log(this.todos);
    }

}