import { Injectable } from '@angular/core';
import {  HttpInterceptor, 
  HttpRequest, 
  HttpHandler, 
  HttpEvent,
  HttpErrorResponse,
 } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { TokenService } from '@core/services/token.service';
import { AuthService } from '@core/services/auth.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService,
    private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = this.addToken(request);
    //return next.handle(request);

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError(
        (
          httpErrorResponse: HttpErrorResponse,
          _: Observable<HttpEvent<any>>
        ) => {
          if (httpErrorResponse.status === 401) {
            console.log("aqui en el 401");
            this.authService.logout();
          }
          return throwError(httpErrorResponse);
        }
      )
    );

  }

  private addToken(request: HttpRequest<any>) {
    const token = this.tokenService.getToken();
    if(token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
      return request;
    }
    return request;
  }
}
