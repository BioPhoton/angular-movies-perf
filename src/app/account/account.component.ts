import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { setProp } from '../shared/utils/css-variables';
import { stringColor } from '../shared/utils/color';
import { filter, map, tap } from 'rxjs/operators';
import { AuthStateService } from '../auth/auth.state';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  accountId$ = this.authService.accountId$.pipe(
    // It's bad practice to add a side effect to a data stream and also use it for something else.
    // In this case we do it becase of simplicity
    tap((displayName) => {
      // **🚀 Perf Tip:**
      // Use css variables instead of Angular directives or template experssions to avoid change detection
      setProp('avatarColor', stringColor(displayName.slice(0, 1)));
    })
  );

  constructor(
    private authService: AuthStateService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog
  ) {}
}
