import { ɵComponentDef as ComponentDef } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

export interface ObserveLifecycleConfig {
  // readonly afterContentChecked?: string;
  // readonly afterContentInit?: string;
  // readonly afterViewChecked?: string;
  readonly afterViewInit?: string;
  // readonly doCheck?: string;
  // readonly onChanges?: string;
  readonly onDestroy?: string;
  readonly onInit?: string;
}

const configKeys: Array<keyof ObserveLifecycleConfig> = [
  // 'afterContentChecked',
  // 'afterContentInit',
  // 'afterViewChecked',
  'afterViewInit',
  // 'doCheck',
  // 'onChanges',
  'onDestroy',
  'onInit',
];

export function observeLifecycle(config: ObserveLifecycleConfig) {
  return (componentDef: ComponentDef<any>) => {
    const isOnInitObserved = typeof config.onInit === 'string';
    let onInitSubject: Subject<never> | undefined;

    if (isOnInitObserved) {
      const originalHook: () => void = componentDef.type.prototype.ngOnInit
        || (() => undefined);
      onInitSubject = new ReplaySubject(1);
      componentDef.onInit = function ngOnInit() {
        onInitSubject.next();
        originalHook.call(this);
      };
    }

    const isAfterViewInitObserved = typeof config.afterViewInit === 'string';
    let afterViewInitSubject: Subject<never> | undefined;

    if (isAfterViewInitObserved) {
      const originalHook: () => void =
        componentDef.type.prototype.ngAfterViewInit || (() => undefined);
      afterViewInitSubject = new ReplaySubject(1);
      componentDef.afterViewInit = function afterViewInit() {
        afterViewInitSubject.next();
        originalHook.call(this);
      };
    }

    const isOnDestroyObserved = typeof config.onDestroy === 'string';
    let onDestroySubject: Subject<never> | undefined;

    if (isOnDestroyObserved) {
      const originalHook: () => void = componentDef.type.prototype.ngOnDestroy
        || (() => undefined);
      onDestroySubject = new ReplaySubject(1);
      componentDef.onDestroy = function onDestroy() {
        onDestroySubject.next();
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

      if (isOnDestroyObserved) {
        componentInstance[config.onDestroy] = onDestroySubject.asObservable();
      }

      const originalOnDestroy: () => void =
        componentDef.type.prototype.ngOnDestroy || (() => undefined);
      onDestroySubject = new ReplaySubject(1);
      componentDef.onDestroy = function onDestroy() {
        onInitSubject && onInitSubject.complete();
        afterViewInitSubject && afterViewInitSubject.complete();
        originalOnDestroy.call(this);
        onDestroySubject && onDestroySubject.complete();
      };

      return componentInstance;
    };
  };
}
