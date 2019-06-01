import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { componentFeatures, fromStore } from '../features';
import { Todos } from './todo';

@Component({
  selector: 'ivy-todos',
  template: `
    <ul>
      <li *ngFor="let todo of todos$ | async">
        {{todo.description}}
      </li>
    </ul>
  `,
})
@componentFeatures([
  fromStore({ todos$: 'todos' }),
])
export class IvyTodosComponent {
  todos$!: Observable<Todos>;
}
