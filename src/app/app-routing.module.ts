import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: 'about', loadChildren: () => import('app/about/about.routed.module').then(m => m.AboutRoutedModule)},
  {path: 'playlist', loadChildren: () => import('app/playlist/playlist.module').then(m => m.PlaylistModule), canActivate: [AuthGuard]},
  {
    path: 'categories',
    loadChildren: () => import('app/categories/categories.module').then(m => m.CategoriesModule), canActivate: [AuthGuard]
  },
  {path: 'account', loadChildren: () => import('app/account/account.module').then(m => m.AccountModule), canActivate: [AuthGuard]},
  {path: 'sign-in', loadChildren: () => import('app/sign-in/sign-in.module').then(m => m.SignInModule)},
  {path: 'star/:id', loadChildren: () => import('app/star/star.module').then(m => m.StarModule)},
  {path: 'settings', component: SettingsComponent},

  {path: '', redirectTo: '/movies/now-playing', pathMatch: 'full'},
  {path: '**', redirectTo: '/movies/now-playing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
