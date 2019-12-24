import {
  ɵComponentDef as ComponentDef,
  ɵɵdirectiveInject as directiveInject,
} from '@angular/core';
import { select, Store } from '@ngrx/store';

import { State } from '../reducers';

export function withUsername(componentDef: ComponentDef<any>): void {
  const { factory, type } = componentDef;

  componentDef.factory = () => {
    const component = factory(type);
    const store = directiveInject(Store) as Store<State>;
    component.username$ = store.pipe(select(state => state.username));

    return component;
  };
}
