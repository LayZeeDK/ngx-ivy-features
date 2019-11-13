import { Inject, Injectable } from '@angular/core';

import { ApplicationStorage } from './application-storage';
import { storageToken } from './storage.token';

@Injectable({
  providedIn: 'root',
})
export class StorageService implements ApplicationStorage {
  constructor(
    @Inject(storageToken) private storage: Storage,
  ) {}

  delete(key: string) {
    this.storage.removeItem(key);
  }

  load(key: string) {
    return this.storage.getItem(key);
  }

  save(key: string, value: string) {
    this.storage.setItem(key, value);
  }
}
