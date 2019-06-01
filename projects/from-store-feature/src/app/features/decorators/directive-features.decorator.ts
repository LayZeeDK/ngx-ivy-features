import { Type } from '@angular/core';

import { DirectiveDefFeatures } from './directive-def-feature';

export function directiveFeatures(features: DirectiveDefFeatures) {
  return <T>(directiveType: Type<T>) => {
    Promise.resolve().then(() => {
      const directiveDef = directiveType['ngDirectiveDef'];
      Object.assign(directiveDef, { features });
      features.forEach(feature => feature(directiveDef));
    });
  };
}
