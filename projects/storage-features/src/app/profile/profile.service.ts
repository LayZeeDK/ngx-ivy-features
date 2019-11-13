import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Profile } from './profile';

@Injectable()
export abstract class ProfileService {
  abstract loadFromBackend(): Observable<Profile>;
}
