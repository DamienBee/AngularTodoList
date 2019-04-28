import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

/**
 * Mock the HTTP api
 */
export class InMemTodoService implements InMemoryDbService {
    createDb() {
        let todos: Array<Todo> = [
            { id: 1, title: 'Make a great Appli', description: '', isFinished: false },
            { id: 2, title: 'Install visual studio', description: '', isFinished: true },
            { id: 3, title: 'Send the result', description: '', isFinished: false },
            { id: 4, title: 'Sleep', description: '', isFinished: false }
        ];

        return { todos };
    }
}