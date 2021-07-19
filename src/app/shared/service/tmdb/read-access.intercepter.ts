import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { AuthStateService } from '../../../auth/auth.state';

const getAuthHeaders: (token: string) => HttpHeaders = (token: string) =>
  new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });

const readAccessHeaders: HttpHeaders = new HttpHeaders({
  Authorization: `Bearer ${environment.tmdbApiReadAccessKey}`,
});

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
