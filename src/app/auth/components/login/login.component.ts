import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth.service';
import { UserLogin } from '@core/models/user-login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  userLogin: UserLogin = {username: '', password:''};

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.logout();
  
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });  
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;

      this.userLogin.username= value.username 
      this.userLogin.password= value.password 

      this.authService.login(this.userLogin)
      .subscribe(
        data => {
          this.router.navigate(['admin/colores']);
        },
        error => {
            alert("error al ingresar datos");
        });
    }
  }
}
