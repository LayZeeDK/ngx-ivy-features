import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { metaReducers, reducers } from './reducers';
import {
  AddTodoComponent,
  AddTodoContainerComponent,
  IvyAddTodoComponent,
  IvyTodosComponent,
  TodosComponent,
} from './todos';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent,
    AddTodoContainerComponent,
    IvyTodosComponent,
    IvyAddTodoComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    ReactiveFormsModule,
  ],
})
export class AppModule {}
