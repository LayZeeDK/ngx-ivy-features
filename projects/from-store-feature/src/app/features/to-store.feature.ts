import {
  EventEmitter,
  ɵComponentDef as ComponentDef,
  ɵɵdirectiveInject as directiveInject,
} from '@angular/core';
import { ActionCreator, Store } from '@ngrx/store';

export interface ToStoreConfig {
  [outputPropertyName: string]: ActionCreator,
}

export function toStore(config: ToStoreConfig) {
  return (componentDef: ComponentDef<any>) => {
    const originalFactory = componentDef.factory;
    componentDef.factory = () => {
      const componentInstance = originalFactory(componentDef.type);
      const store = directiveInject(Store);

      Object
        .entries(config)
        .forEach(([outputPropertyName, actionCreator]) => {
          const outputProperty: EventEmitter<any> = componentInstance[outputPropertyName];
          outputProperty.subscribe(event => {
            store.dispatch(actionCreator.call(null, event));
          });

          // TODO: add teardown
        });

      return componentInstance;
    };
  };
}
