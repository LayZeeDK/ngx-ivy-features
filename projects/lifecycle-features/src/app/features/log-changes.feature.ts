import {
  OnChanges,
  SimpleChanges,
  ɵComponentDef as ComponentDef,
} from '@angular/core';

export function logChanges() {
  return (componentDef: ComponentDef<OnChanges>) => {
    const originalOnChanges: (changes: SimpleChanges) => void =
      componentDef.type.prototype.ngOnChanges
      || ((changes: SimpleChanges) => undefined);
    componentDef.type.prototype = function ngOnChanges(changes: SimpleChanges) {
      Object.entries(changes)
        .forEach(([key, { currentValue, previousValue }]) => {
          console.log(`[${key} change]: currentValue: ${currentValue}, previousValue: ${previousValue}`);
        });

      originalOnChanges(changes);
    }
  };
}
