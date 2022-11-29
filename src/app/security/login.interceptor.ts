import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    if (token) {
      const cloneReq = req.clone({
        params: new HttpParams().set('access_token', token),
      });
      return next.handle(cloneReq);
    } else {
      return next.handle(req);
    }
  }
}

export const LoginInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoginInterceptor,
  multi: true,
};
