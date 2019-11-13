import { Component, OnInit } from '@angular/core';
import { componentFeatures } from 'ivy-features';

import { withStorage } from '../features';
import { ApplicationStorage } from '../storage';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  template: `
    <p *ngIf="!isLoading; else loadingMessage">
      My username is {{username}} and I love to watch {{favoriteMovie}}.
    </p>

    <ng-template #loadingMessage>
      <p>
        Loading profile...
      </p>
    </ng-template>

    <dev-truncate-storage></dev-truncate-storage>
  `,
})
@componentFeatures([
  withStorage,
])
export class ProfileComponent implements ApplicationStorage, OnInit {
  favoriteMovie?: string;
  username?: string;

  get isLoading() {
    return this.username == null
      || this.favoriteMovie == null;
  }

  delete!: (key: string) => void;
  load!: (key: string) => string | null;
  save!: (key: string, value: string) => void;

  constructor(
    private profileService: ProfileService,
  ) {}

  ngOnInit() {
    this.favoriteMovie = this.load('favoriteMovie');
    this.username = this.load('username');

    this.profileService.loadFromBackend()
      .subscribe(({ favoriteMovie, username }) => {
        this.save('favoriteMovie', favoriteMovie);
        this.save('username', username);
        this.favoriteMovie = favoriteMovie;
        this.username = username;
      });
  }
}
