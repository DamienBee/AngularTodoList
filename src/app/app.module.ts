import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todos/state/todo.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([TodoEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
