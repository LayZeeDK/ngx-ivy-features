import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { metaReducers, reducers } from './reducers';
import { IvyTodosComponent, TodosComponent } from './todos';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TodosComponent,
    IvyTodosComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
})
export class AppModule {}
