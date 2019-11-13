import {
  ɵComponentDef as ComponentDef,
  ɵɵdirectiveInject as directiveInject,
} from '@angular/core';

import { ApplicationStorage } from './application-storage';
import { StorageService } from './storage.service';

export function withStorage(componentDef: ComponentDef<any>) {
  const originalFactory = componentDef.factory;
  componentDef.factory = () => {
    const componentInstance = originalFactory(componentDef.type);
    const storage = directiveInject(StorageService);

    const methods: Array<keyof ApplicationStorage> = [
      'delete',
      'load',
      'save',
    ];

    methods.forEach(methodName =>
      componentInstance[methodName] = storage[methodName].bind(storage));

    return componentInstance;
  };
}
