import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodosStoreService } from '../todos-store.service';
import { Validators, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  addTodoForm: FormGroup;
  latestTodoAdded: string;

  constructor(private todosStore: TodosStoreService, private formBuilder: FormBuilder) {
    this.addTodoForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
  }

  save() {
    const todoToAdd: Todo = {
      id: '',
      title: this.addTodoForm.get('title').value,
      description: this.addTodoForm.get('description').value,
      isFinished: false
    }
    this.todosStore.addTodo(todoToAdd).then(idCreated => this.handleSaveResult(idCreated) );
    this.addTodoForm= this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  handleSaveResult(idCreated: string) {
    this.latestTodoAdded = idCreated;
  }
}