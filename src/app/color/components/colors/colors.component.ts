import { Component, OnInit } from '@angular/core';

import { Color } from '@core/models/color.model';

import { ColorsService } from '@core/services/products/colors.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  colors: Color[] = [];
   // MatPaginator Inputs
   length = 5;
   pageSize = 5;

   
  constructor(    
    private colorsService: ColorsService

    ) { 

    }

  ngOnInit() {
    this.fetchColors();
  }

  fetchColors(){
    this.colorsService.getAll()
    .subscribe(colors => {
      this.colors = colors.data;
      this.length = colors.data.length;
      //console.log(colors.data);
    });
  }
  paging(){
    console.log("hoaaaa")
  }

}
