import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbAuthEffects } from '../auth/tmdbAuth.effects';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  error: string;

  constructor(private router: Router, private tmdbService: TmdbAuthEffects) {}

  signIn() {
    this.tmdbService.approveRequestToken();
  }
}
