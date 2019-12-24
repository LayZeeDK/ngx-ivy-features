import { Type } from '@angular/core';

import { ComponentDefFeatures } from './component-def-feature';

export function componentFeatures(features: ComponentDefFeatures) {
  return <T>(componentType: Type<T>) => {
    Promise.resolve().then(() => {
      const componentDef = componentType['ɵcmp']
        || componentType['ngComponentDef'];

      if (componentDef === undefined) {
        throw new Error('Ivy is not enabled.');
      }

      componentDef.features = componentDef.features || [];
      componentDef.features = [...componentDef.features, ...features];

      features.forEach(feature => feature(componentDef));
    });
  };
}
