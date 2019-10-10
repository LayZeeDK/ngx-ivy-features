import {
  ɵComponentDef as ComponentDef,
  ɵɵdirectiveInject as directiveInject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

export interface FromRouteParamsConfig {
  [parameterKey: string]: string;
}

export function fromRouteParams(config: FromRouteParamsConfig) {
  return (componentDef: ComponentDef<any>) => {
    const originalFactory = componentDef.factory;
    componentDef.factory = () => {
      const componentInstance = originalFactory(componentDef.type);
      const route = directiveInject(ActivatedRoute);

      Object.entries(config)
        .forEach(([parameterKey, componentKey]) =>
          componentInstance[componentKey] = route.paramMap.pipe(
            map(parameters => parameters.get(parameterKey)),
          ));

      return componentInstance;
    };
  };
}
