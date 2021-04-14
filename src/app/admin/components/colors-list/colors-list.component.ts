import { Component, OnInit } from '@angular/core';

import { ColorsService } from '@core/services/colors/colors.service';
import { Color } from '@core/models/color.model';

@Component({
  selector: 'app-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.scss']
})
export class ColorsListComponent implements OnInit {

  colors: Color[] = [];
  displayedColumns: string[] = ['id', 'name', 'color', 'pantone', 'year', 'actions'];

  constructor(
    private colorsService: ColorsService
  ) { }

  ngOnInit() {
    this.fetchColors();
  }

  fetchColors(){
    this.colorsService.getAll()
    .subscribe(colors => {
      this.colors = colors.data;
    });

  }
  deleteItem(id: string) {
    this.colorsService.delete(id)
    .subscribe(rta => {
      this.fetchColors();
    });
  }
}
