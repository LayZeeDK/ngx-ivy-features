import { NgModule } from '@angular/core';

import { DevelopmentOnlyDirective } from './development-only.directive';
import { TruncateStorageComponent } from './truncate-storage.component';

const developmentDeclarables = [
  DevelopmentOnlyDirective,
  TruncateStorageComponent,
];

@NgModule({
  declarations: developmentDeclarables,
  exports: developmentDeclarables,
})
export class DevelopmentModule {}
