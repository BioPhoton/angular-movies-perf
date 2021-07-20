import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { AuthStateService } from '../../../auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class ReadAccessInterceptor implements HttpInterceptor {
  constructor(private authService: AuthStateService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.state.getValue().accessToken;

    return next.handle(
      req.clone({
        setHeaders: {
          Authorization: token
            ? `Bearer ${token}`
            : `Bearer ${environment.tmdbApiReadAccessKey}`,
        },
      })
    );
  }
}
