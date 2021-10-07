import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'movie/:id',
    loadChildren: () =>
      import('app/pages/movie-detail-page/movie-detail-page.module').then((m) => m.MovieDetailPageModule),
  },
  {
    path: 'movies/:category',
    loadChildren: () =>
      import('app/pages/movie-list-page/movie-list-page.module').then((m) => m.MovieListPageModule),
  },
  {
    path: 'genre/:genre',
    loadChildren: () =>
      import('app/pages/movie-list-page/movie-list-page.module').then((m) => m.MovieListPageModule),
  },
  { path: '**', redirectTo: 'movies/popular' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabled',
      onSameUrlNavigation: 'reload',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
