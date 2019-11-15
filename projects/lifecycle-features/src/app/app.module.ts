import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LifecycleComponent,
  ],
  imports: [
    BrowserModule,
  ],
})
export class AppModule {}
