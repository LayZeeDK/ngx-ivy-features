import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
    <h1>
      View Engine todos
    </h1>

    <app-todos></app-todos>

    <h1>
      Ivy todos
    </h1>

    <ivy-todos></ivy-todos>
  `,
})
export class AppComponent {}
