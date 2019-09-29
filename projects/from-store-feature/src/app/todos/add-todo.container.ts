import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../reducers';
import { AddTodoEvent } from './add-todo.component';
import { addTodo } from './todo.actions';

@Component({
  selector: 'app-add-todo',
  template: `
    <app-add-todo-ui
      (addTodo)="onAddTodo($event)"></app-add-todo-ui>
  `,
})
export class AddTodoContainerComponent {
  constructor(
    private store: Store<State>,
  ) {}

  onAddTodo(event: AddTodoEvent) {
    this.store.dispatch(addTodo(event));
  }
}
