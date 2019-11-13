import { Injectable } from '@angular/core';
import { asapScheduler, of, scheduled } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ProfileService } from './profile.service';

@Injectable()
export class ProfileServiceStub implements ProfileService {
  loadFromBackend() {
    return scheduled(
      of({
        favoriteMovie: 'The Matrix',
        username: 'LayZeeDK',
      }),
      asapScheduler).pipe(
        delay(1500),
      );
  }
}
