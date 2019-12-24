import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { componentFeatures, withUsername } from './features';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
    <header>
      Username: {{username$ | async}}
    </header>

    <h1>
      View Engine todos
    </h1>

    <app-todos></app-todos>

    <app-add-todo></app-add-todo>



    <h1>
      Ivy todos
    </h1>

    <ivy-todos></ivy-todos>

    <ivy-add-todo></ivy-add-todo>
  `,
})
@componentFeatures([
  withUsername,
])
export class AppComponent {
  username$: Observable<string>;
}
