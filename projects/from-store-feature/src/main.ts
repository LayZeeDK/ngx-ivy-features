import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { addComponentFeature } from './app/add-component-feature';
import { AppModule } from './app/app.module';
import { fromStore } from './app/from-store.feature';
import { IvyTodosComponent } from './app/ivy-todos/ivy-todos.component';
import { environment } from './environments/environment';

addComponentFeature(fromStore({ todos$: 'todos' }), IvyTodosComponent);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
