import { Component, OnInit } from '@angular/core';
import { componentFeatures } from 'ivy-features';
import { concat, Observable } from 'rxjs';
import { endWith, startWith } from 'rxjs/operators';

import { observeLifecycle } from './features';

@Component({
  selector: 'app-lifecycle',
  template: `
    Initialized? {{ initializedMessage$ | async }}<br>
    Ready? {{ readyMessage$ | async }}
  `,
})
@componentFeatures([
  observeLifecycle({
    afterViewInit: 'afterViewInit$',
    onInit: 'onInit$',
  })
])
export class LifecycleComponent implements OnInit {
  afterViewInit$!: Observable<never>;
  onInit$!: Observable<never>;

  initializedMessage$!: Observable<string>;
  readyMessage$!: Observable<string>;

  ngOnInit() {
    this.initializedMessage$ = this.onInit$.pipe(
      startWith('No'),
      endWith('Yes'));

    this.readyMessage$ = concat(
      this.onInit$,
      this.afterViewInit$).pipe(
        startWith('No'),
        endWith('Yes'));
  }
}
