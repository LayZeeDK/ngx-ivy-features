import { ɵComponentDef as ComponentDef } from '@angular/core';
import { Subject } from 'rxjs';

export interface ObserveLifecycleConfig {
  // readonly afterContentChecked?: string;
  // readonly afterContentInit?: string;
  // readonly afterViewChecked?: string;
  readonly afterViewInit?: string;
  // readonly doCheck?: string;
  // readonly onChanges?: string;
  // readonly onDestroy?: string;
  readonly onInit?: string;
}

const configKeys: Array<keyof ObserveLifecycleConfig> = [
  // 'afterContentChecked',
  // 'afterContentInit',
  // 'afterViewChecked',
  'afterViewInit',
  // 'doCheck',
  // 'onChanges',
  // 'onDestroy',
  'onInit',
];

export function observeLifecycle(config: ObserveLifecycleConfig) {
  return (componentDef: ComponentDef<any>) => {
    const isOnInitObserved = typeof config.onInit === 'string';
    let onInitSubject: Subject<never> | undefined;

    if (isOnInitObserved) {
      const originalHook: () => void = componentDef.type.prototype.ngOnInit
        || (() => undefined);
      onInitSubject = new Subject();
      componentDef.onInit = function ngOnInit() {
        onInitSubject.complete();
        originalHook.call(this);
      };
    }

    const isAfterViewInitObserved = typeof config.afterViewInit === 'string';
    let afterViewInitSubject: Subject<never> | undefined;

    if (isOnInitObserved) {
      const originalHook: () => void = componentDef.type.prototype.ngOnInit
        || (() => undefined);
      afterViewInitSubject = new Subject();
      componentDef.afterViewInit = function afterViewInit() {
        afterViewInitSubject.complete();
        originalHook.call(this);
      };
    }

    const originalFactory = componentDef.factory;
    componentDef.factory = () => {
      const componentInstance = originalFactory(componentDef.type);

      if (isOnInitObserved) {
        componentInstance[config.onInit] = onInitSubject.asObservable();
      }

      if (isAfterViewInitObserved) {
        componentInstance[config.afterViewInit] =
          afterViewInitSubject.asObservable();
      }

      return componentInstance;
    };
  };
}
