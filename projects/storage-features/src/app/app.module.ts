import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevelopmentModule } from './development';
import { ProfileComponent } from './profile';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    DevelopmentModule,
  ],
})
export class AppModule {}
