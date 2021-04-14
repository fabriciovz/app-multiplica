import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import { Product } from "./../../models/product.model";
import { environment } from '../../../../environments/environment';
import { throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { Color } from "../../models/color.model";


@Injectable({
  providedIn: "root",
})
export class ColorsService {
 
  constructor(
    private http: HttpClient
  ) {}

  //wihout paging
  getAll() {
    return this.http.get<any>(`${environment.url_api}/colores`)
    .pipe(catchError(this.hanleError)
    );
  }
  //with paging
  get() {
    //TODO: paging managing
    return this.http.get<any>(`${environment.url_api}/colores/?page=1&sort=id&dir=1&limit=6&soft=false`)
    .pipe(
      retry(1),
      catchError(this.hanleError)
    );
  }
  getByID(id: string) {
    return this.http.get<Color[]>(`${environment.url_api}/colores/${id}`)
    .pipe(
      retry(1),
      catchError(this.hanleError)
    );
  }
  create(color: Color) {
    return this.http.post(`${environment.url_api}/colores`,color)
    .pipe(
      retry(1),
      catchError(this.hanleError)
    );
  }
  update(id: string, changes: Partial<Color>) {
    return this.http.put(`${environment.url_api}/colores//${id}`,changes)
    .pipe(
      retry(1),
      catchError(this.hanleError)
    );
  }
  delete(id: string) {
    return this.http.delete<Color[]>(`${environment.url_api}/colores/${id}`)
    .pipe(
      retry(1),
      catchError(this.hanleError)
    );
  }

  private hanleError(error: HttpErrorResponse) {
    return throwError("something bad happened")
  }
}
