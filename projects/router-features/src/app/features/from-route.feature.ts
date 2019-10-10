import {
  ɵComponentDef as ComponentDef,
  ɵɵdirectiveInject as directiveInject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface FromRouteConfig {
  readonly data?: string;
  readonly fragment?: string;
  readonly paramMap?: string;
  readonly queryParamMap?: string;
  readonly url?: string;
}

const configKeys: Array<keyof FromRouteConfig> = [
  'data',
  'fragment',
  'paramMap',
  'queryParamMap',
  'url',
];

export function fromRoute(config: FromRouteConfig) {
  return (componentDef: ComponentDef<any>) => {
    const originalFactory = componentDef.factory;
    componentDef.factory = () => {
      const componentInstance = originalFactory(componentDef.type);
      const route = directiveInject(ActivatedRoute);

      configKeys
        .filter(configKey => typeof config[configKey] === 'string')
        .forEach(configKey =>
          componentInstance[config[configKey]] = route[configKey]);

      return componentInstance;
    };
  };
}
