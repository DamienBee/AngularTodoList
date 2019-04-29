import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosStoreService } from '../todos-store.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'pm-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todoDetailsId: string;

  constructor(private todosStore: TodosStoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todoDetailsId = this.route.snapshot.paramMap.get('id');
  }
}
