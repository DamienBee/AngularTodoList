import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo> = [];

  constructor() { }

  ngOnInit() {
    let todo1 = new Todo();
    todo1.title = "Make a great Appli";
    let todo2 = new Todo();
    todo2.title = "Install visual studio";
    todo2.finished = true;
    let todo3 = new Todo();
    todo3.title = "Send the result";
    this.todos.push(todo1);
    this.todos.push(todo2);
    this.todos.push(todo3);
  }

}
