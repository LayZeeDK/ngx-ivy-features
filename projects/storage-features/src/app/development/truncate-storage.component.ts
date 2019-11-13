import { Component, Inject } from '@angular/core';

import { storageToken } from '../storage.token';

@Component({
  selector: 'dev-truncate-storage',
  template: `
    <button *developmentOnly (click)="onTruncate()">
      Truncate storage
    </button>
  `,
})
export class TruncateStorageComponent {
  constructor(
    @Inject(storageToken) private storage: Storage,
  ) {}

  onTruncate() {
    this.storage.clear();
  }
}
