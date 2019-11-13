import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';

import { Profile } from './profile';
import { ProfileServiceStub } from './profile-service.stub';

@Injectable({
  deps: [
    [new Optional(), new SkipSelf(), ProfileService],
  ],
  useFactory: (instance: ProfileService | null): ProfileService =>
    instance || new ProfileServiceStub(),
  providedIn: 'root',
})
export abstract class ProfileService {
  abstract loadFromBackend(): Observable<Profile>;
}
