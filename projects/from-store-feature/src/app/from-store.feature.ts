import {
  ɵComponentDef as ComponentDef,
  ɵɵdirectiveInject as directiveInject,
} from '@angular/core';
import { select, Store } from '@ngrx/store';

export function fromStore(config: { [propertyName: string]: string }) {
  return (componentDef: ComponentDef<any>) => {
    const originalFactory = componentDef.factory;
    componentDef.factory = () => {
      const componentInstance = originalFactory(componentDef.type);
      const store = directiveInject(Store);

      Object
        .entries(config)
        .forEach(([propertyName, selector]) =>
          componentInstance[propertyName] = store.pipe(select(selector)));

      return componentInstance;
    };

    console.log('fromStore feature applied', componentDef);
  };
}
