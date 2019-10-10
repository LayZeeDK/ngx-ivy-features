import {
  ɵComponentDef as ComponentDef,
  ɵɵdirectiveInject as directiveInject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface FromRouteConfig {
  readonly paramMap?: string;
}

export function fromRoute(config: FromRouteConfig) {
  return (componentDef: ComponentDef<any>) => {
    const originalFactory = componentDef.factory;
    componentDef.factory = () => {
      const componentInstance = originalFactory(componentDef.type);
      const route = directiveInject(ActivatedRoute);

      if (config.paramMap != null) {
        componentInstance[config.paramMap] = route.paramMap;
      }

      return componentInstance;
    };
  };
}
