import { AfterViewInit, Component } from '@angular/core';

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
export class IvyTodosComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.log('IvyTodosComponent#todos$', this['todos$']);
  }
}
