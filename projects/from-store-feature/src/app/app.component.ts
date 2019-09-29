import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
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
export class AppComponent {}
