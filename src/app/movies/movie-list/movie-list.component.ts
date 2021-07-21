import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MovieModel } from '../model';
import { W342H513 } from '../../shared/utils/image-sizes';

interface Movie extends MovieModel {
  url: string;
}

@Component({
  selector: 'app-movie-list',
  template: `
    <h2 *ngIf="!dataParam">{{ title }}</h2>
    <h2 *ngIf="dataParam">{{ dataParam }}</h2>
    <div class="items" *ngIf="movies && movies.length > 0; else noData">
      <div
        class="item"
        *ngFor="let movie of movies; trackBy: movieById"
        [routerLink]="['/movie', movie.id]"
      >
        <div class="aspect-ratio-box">
          <img
            [defaultImage]="'assets/images/no_poster_available.jpg'"
            [lazyLoad]="
              'https://image.tmdb.org/t/p/w' +
              W342H513.WIDTH +
              '/' +
              movie.poster_path
            "
            [width]="W342H513.WIDTH"
            [height]="W342H513.HEIGHT"
            alt="poster movie"
            [title]="movie.title"
          />
        </div>
        <div class="details-panel-wrapper">
          <h3 class="poster-title">{{ movie.title }}</h3>
          <star-rating [rating]="movie.vote_average"></star-rating>
        </div>
      </div>
    </div>
    <ng-template #noData>
      <h3>
        No results
        <mat-icon>sentiment_very_dissatisfied</mat-icon>
      </h3>
    </ng-template>
  `,
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  W342H513 = W342H513;

  @Input() title: string | number;
  movies: Movie[];

  @Input('movies')
  set _movies(movies: Movie[]) {
    this.movies = movies.map((m: Movie) => {
      m.url = 'https://image.tmdb.org/t/p/w' + W342H513.WIDTH + m.poster_path;
      return m;
    });
  }

  @Input() adult: string;
  @Input() lang: string;
  @Input() dataParam: string;

  constructor() {}

  movieById(movie: MovieModel) {
    return movie.id;
  }

  addMovie(movie: any) {}
}
