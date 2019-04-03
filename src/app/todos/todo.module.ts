import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatCheckboxModule, MatListModule, MatDividerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  exports: [TodoListComponent]
})
export class TodoModule { }
