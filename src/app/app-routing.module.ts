import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoModule } from './todos/todo.module';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';

const routes: Routes = [
  { path: 'todos/:id', component: TodoDetailComponent },
  {
    path: 'todos', component: TodoListComponent
  },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: '**', component: TodoListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // debug flag
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
