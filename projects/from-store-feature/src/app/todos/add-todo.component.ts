import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { State } from '../reducers';
import { addTodo } from './todo.actions';

@Component({
  selector: 'app-add-todo',
  template: `
    <form [formGroup]="form"
      (ngSubmit)="onSubmit()">
      <input formControlName="description">

      <button type="submit">
        Add
      </button>
    </form>
  `,
})
export class AddTodoComponent {
  form = new FormGroup({
    description: new FormControl(null, Validators.required),
  });

  constructor(
    private store: Store<State>,
  ) {}

  onSubmit() {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    this.store.dispatch(addTodo(this.form.value));
    this.form.reset();
  }
}
