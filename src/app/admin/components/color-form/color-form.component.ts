import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

//import { MyValidators } from './../../../utils/validators';
import { ColorsService } from '@core/services/colors/colors.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss']
})
export class ColorFormComponent implements OnInit {

  form: FormGroup;
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private colorsService: ColorsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      _id: [''],
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      color: ['', [Validators.required]],
      pantone: ['', [Validators.required/*, MyValidators.isPriceValid*/]],
      year: [2021, [Validators.required]],
    });  
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      if(this.id!='' && this.id!=undefined){
        this.colorsService.getByID(this.id)
        .subscribe((color: any) => {
          this.form.patchValue(color.data);
        });
      }
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const color = this.form.value;

      if(this.id!='' && this.id!=undefined){
        this.colorsService.update(this.id, color)
        .subscribe((newColor) => {
          this.router.navigate(['./admin/colores']);
        });

      }
      else {
        this.colorsService.create(color)
        .subscribe((newColor) => {
          this.router.navigate(['./admin/colores']);
        });
      }
    }
  }

  get priceField() {
    return this.form.get('price');
  }

}
