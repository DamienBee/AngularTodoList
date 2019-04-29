import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

/**
 * Mock the HTTP api
 */
export class InMemTodoService implements InMemoryDbService {
    createDb() {
        let todos: Array<Todo> = [
            { id: '1', title: 'Make a great Appli', description: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi.', isFinished: false },
            { id: '2', title: 'Install visual studio', description: 'Neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero', isFinished: true },
            { id: '3', title: 'Send the result', description: 'Id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla', isFinished: false },
            { id: '4', title: 'Sleep', description: 'Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim', isFinished: false }
        ];

        return { todos };
    }
}