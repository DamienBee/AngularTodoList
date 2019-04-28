import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodosStoreService } from '../todos-store.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  
  constructor(private todosStore: TodosStoreService) { }

  ngOnInit() {
  }
}