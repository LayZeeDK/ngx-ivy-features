import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { metaReducers, reducers } from './reducers';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
})
export class AppModule {}
