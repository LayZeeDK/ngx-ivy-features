import {
  Directive,
  Inject,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { isDevelopmentModeToken } from './is-development-mode.token';

@Directive({
  exportAs: 'developmentOnly',
  selector: '[developmentOnly]',
})
export class DevelopmentOnlyDirective implements OnDestroy, OnInit {
  private get isEnabled(): boolean {
    return this.isDevelopmentMode;
  }

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
    @Inject(isDevelopmentModeToken) private isDevelopmentMode: boolean,
  ) {}

  ngOnInit(): void {
    if (this.isEnabled) {
      this.createAndAttachView();
    }
  }

  ngOnDestroy(): void {
    this.destroyView();
  }

  private createAndAttachView(): void {
    this.container.createEmbeddedView(this.template);
  }

  private destroyView(): void {
    this.container.clear();
  }
}
