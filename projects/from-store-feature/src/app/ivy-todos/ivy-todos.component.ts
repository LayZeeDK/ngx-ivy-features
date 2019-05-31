import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { addComponentFeature } from '../add-component-feature';
import { fromStore } from '../from-store.feature';
import { Todos } from '../todo';

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
export class IvyTodosComponent {
  todos$!: Observable<Todos>;
}

addComponentFeature(fromStore({ todos$: 'todos' }), IvyTodosComponent);
