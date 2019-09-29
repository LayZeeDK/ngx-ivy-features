import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { componentFeatures, toStore } from '../features';
import { addTodo } from './todo.actions';

export interface AddTodoEvent {
  readonly description: string;
}

@Component({
  selector: 'ivy-add-todo',
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
@componentFeatures([
  toStore({ addTodo })
])
export class IvyAddTodoComponent {
  @Output()
  addTodo = new EventEmitter<AddTodoEvent>();

  form = new FormGroup({
    description: new FormControl(null, Validators.required),
  });

  onSubmit() {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    const { description } = this.form.value;
    this.addTodo.emit({ description });
    this.form.reset();
  }
}
