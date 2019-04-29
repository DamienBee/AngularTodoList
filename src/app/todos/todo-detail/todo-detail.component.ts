import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosStoreService } from '../todos-store.service';

@Component({
  selector: 'todo-detail',
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
