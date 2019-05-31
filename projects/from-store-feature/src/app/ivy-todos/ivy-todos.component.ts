import { Component } from '@angular/core';

@Component({
  selector: 'ivy-todos',
  template: `
    <ul>
      <li *ngFor="let todo of []">
        {{todo.description}}
      </li>
    </ul>
  `,
})
export class IvyTodosComponent {}
