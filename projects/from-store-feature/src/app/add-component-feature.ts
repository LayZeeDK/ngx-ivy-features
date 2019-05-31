import { ɵComponentDef as ComponentDef } from '@angular/core';

export type Feature<T> = (componentDef: ComponentDef<T>) => void;

export function addComponentFeature<T>(feature: Feature<T>, componentType) {
  feature(componentType['ngComponentDef']);

  componentType['ngComponentDef'].features =
    componentType['ngComponentDef'].features || [];
  componentType['ngComponentDef'].features = [
    ...componentType['ngComponentDef'].features,
    feature,
  ];
}
