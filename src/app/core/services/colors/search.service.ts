import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import { Color } from "../../models/color.model";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  private products: Color[] = [];
  private productsSearch = new BehaviorSubject<Color[]>([]);

  productsSearch$ = this.productsSearch.asObservable();

  constructor() {}

  addProducts(colors: Color[]) {
    this.products = colors;
    this.productsSearch.next(this.products);
  }
}
