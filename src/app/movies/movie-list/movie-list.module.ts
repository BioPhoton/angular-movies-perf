import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { RxForModule } from '../../shared/directives/rx-for.directive';
import { MovieListComponent } from './movie-list.component';
import { StarRatingModule } from '../../shared/component/star-rating/star-rating.module';
import { LetModule } from '@rx-angular/template/let';
import { AspectRatioBoxModule } from '../../shared/component/aspect-ratio-box/aspect-ratio-box.module';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    StarRatingModule,
    RouterModule,
    LetModule,
    AspectRatioBoxModule,
    RxForModule,
  ],
  exports: [MovieListComponent],
})
export class MovieListModule {}
