import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { MatButtonModule } from '@angular/material/button';

const ROUTES: Routes = [{ path: '', component: SignInComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), MatButtonModule],
  declarations: [SignInComponent],
})
export class SignInModule {}
