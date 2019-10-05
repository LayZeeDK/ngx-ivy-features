import { ɵDirectiveDef as DirectiveDef } from '@angular/core';


export interface DirectiveDefFeature {
  <T>(directiveDef: DirectiveDef<T>): void;
  /**
   * Marks a feature as something that {@link InheritDefinitionFeature} will execute
   * during inheritance.
   *
   * NOTE: DO NOT SET IN ROOT OF MODULE! Doing so will result in tree-shakers/bundlers
   * identifying the change as a side effect, and the feature will be included in
   * every bundle.
   */
  ngInherit?: true;
}

export type DirectiveDefFeatures = ReadonlyArray<DirectiveDefFeature>;
