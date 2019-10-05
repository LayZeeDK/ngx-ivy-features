import {
  EventEmitter,
  ɵComponentDef as ComponentDef,
  ɵɵdirectiveInject as directiveInject,
} from '@angular/core';
import { ActionCreator, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

export interface ToStoreConfig {
  readonly [outputPropertyName: string]: ActionCreator,
}

export function toStore(config: ToStoreConfig) {
  return (componentDef: ComponentDef<any>) => {
    const originalFactory = componentDef.factory;
    componentDef.factory = () => {
      const componentInstance = originalFactory(componentDef.type);
      const store = directiveInject(Store);

      const outputSubscription = new Subscription();
      Object
        .entries(config)
        .map(([outputPropertyName, actionCreator]): [EventEmitter<any>, ActionCreator] =>
          [componentInstance[outputPropertyName], actionCreator])
        .map(([outputProperty, actionCreator]) =>
          outputProperty.subscribe(event =>
            store.dispatch(actionCreator.call(null, event))))
        .forEach(subscription => outputSubscription.add(subscription));

      const originalNgOnDestroy =
        componentInstance.ngOnDestroy || (() => undefined);

      componentInstance.ngOnDestroy = () => {
        originalNgOnDestroy.call(componentInstance);
        outputSubscription.unsubscribe();
      };

      return componentInstance;
    };
  };
}
