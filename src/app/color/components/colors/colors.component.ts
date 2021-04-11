import { Component, OnInit } from '@angular/core';

import { Color } from '@core/models/color.model';

import { SearchService } from '@core/services/products/search.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {


  total$: Observable<number>;

  products$: Observable<Color[]>;

  constructor(    
    private searchService: SearchService

    ) { 

      this.total$ = this.searchService.productsSearch$
      .pipe(
        map(products => products.length)
      );

      this.products$ = this.searchService.productsSearch$;
    }

  ngOnInit() {
  }

}
