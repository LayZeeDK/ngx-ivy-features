import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { componentFeatures } from 'ivy-features';
import { asapScheduler, concat, Observable, of } from 'rxjs';
import { map, mapTo, observeOn, takeUntil } from 'rxjs/operators';

import { observeLifecycle } from './features';

@Component({
  selector: 'app-lifecycle',
  template: `
    Ready? {{ readyMessage$ | async }}<br>
    Result: <span #result>{{ 4 + 2 }}</span>
  `,
})
@componentFeatures([
  observeLifecycle({
    afterViewInit: 'afterViewInit$',
    onDestroy: 'onDestroy$',
  })
])
export class LifecycleComponent implements OnInit {
  @ViewChild('result', { static: true })
  result!: ElementRef<HTMLElement>;

  afterViewInit$!: Observable<never>;
  onDestroy$!: Observable<never>;

  readyMessage$!: Observable<string>;

  ngOnInit() {
    this.readyMessage$ = concat(
      of('No'),
      this.afterViewInit$.pipe(
        observeOn(asapScheduler),
        mapTo('Yes')));

    concat(this.afterViewInit$, of()).pipe(
      map(() => this.result.nativeElement.innerText),
      map(text => Number.parseInt(text, 10)),
      takeUntil(this.onDestroy$),
    ).subscribe(result => console.assert(result === 6));
  }
}
