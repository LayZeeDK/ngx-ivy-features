import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../reducers';
import { Todos } from './todo';

@Component({
  selector: 'app-todos',
  template: `
    <ul>
      <li *ngFor="let todo of todos$ | async">
        {{todo.description}}
      </li>
    </ul>
  `,
})
export class TodosComponent {
  todos$: Observable<Todos> = this.store.pipe(select('todos'));

  constructor(
    private store: Store<State>,
  ) {}
}
