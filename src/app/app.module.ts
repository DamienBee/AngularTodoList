import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemTodoService } from './todos/todo-in-mem-data.service';
import { TodoModule } from './todos/todo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoModule,
    InMemoryWebApiModule.forRoot(InMemTodoService),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
