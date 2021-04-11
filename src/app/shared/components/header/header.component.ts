import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

//import { colorsService } from "./../../../core/services/colors/colors.service";
//import { Product } from "./../../../core/models/color.model";

//import { SearchService } from "../../../core/services/colors/search.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  //colors: Product[] = [];
  //form: FormGroup;

  constructor(
    // private colorsService: colorsService,
    // private searchService: SearchService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  // search(e) {
  //   const query: string = this.form.value.query;

  //   //If the key press is enter then it makes a request
  //   if (e.keyCode === 13) {
  //     if (query.length > 0) {
  //       this.colorsService.search(query).subscribe(
  //         (colors) => {
  //           this.colors = colors["data"];
  //           this.searchService.addcolors(this.colors);
  //         },
  //         () => {
  //           this.colors = [];
  //           this.searchService.addcolors(this.colors);
  //         }
  //       );
  //     } else {
  //       this.colors = [];
  //       this.searchService.addcolors(this.colors);
  //     }
  //   }
  // }
  //Building a seach form
  private buildForm() {
    // this.form = this.formBuilder.group({
    //   query: [""],
    // });
  }
}
