import { HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { StorageService } from './shared/service/storage/storage.service';
import { AppComponent } from './app.component';
import { AppShellModule } from './app-shell/app-shell.module';
import { MoviesRoutedModule } from './movies/container/movies.routed.module';
import { httpInterceptorProviders } from './shared/service/tmdb/http-interceptor.providers';
import { StarRatingModule } from './shared/component/star-rating/star-rating.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),
    MoviesRoutedModule,
    AppShellModule,
    AppRoutingModule,
    StarRatingModule,
  ],
  providers: [httpInterceptorProviders, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
