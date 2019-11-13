import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div *ngIf="!isLoading; else loadingMessage">
      My username is {{username}}, and I love to watch {{favoriteMovie}}.
    </div>

    <div #loadingMessage>
      Loading profile...
    </div>
  `,
})
export class ProfileComponent {
  favoriteMovie?: string;
  username?: string;

  get isLoading() {
    return this.username == null
      || this.favoriteMovie == null;
  }
}
