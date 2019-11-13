import { InjectionToken, isDevMode } from '@angular/core';

export const isDevelopmentModeToken: InjectionToken<boolean> =
  new InjectionToken('Development mode flag', {
    factory: (): boolean => isDevMode() || (window as any).ngDevMode,
    providedIn: 'root',
  });
