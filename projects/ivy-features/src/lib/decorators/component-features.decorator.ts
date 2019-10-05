import { Type } from '@angular/core';

import { ComponentDefFeatures } from './component-def-feature';

export function componentFeatures(features: ComponentDefFeatures) {
  return <T>(componentType: Type<T>) => {
    Promise.resolve().then(() => {
      const componentDef = componentType['ngComponentDef'];
      Object.assign(componentDef, { features });
      features.forEach(feature => feature(componentDef));
    });
  };
}
