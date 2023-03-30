import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  router: any;

  constructor(private _router: Router, private apiService: ApiService) {}

  submitLoginForm() {
    const { name, password } = this.loginForm.value;
    const loginData = { name, password };

    this.apiService.submitLoginForm(loginData).subscribe((resp: any) => {
      if (resp.valid) {
        this._router.navigate(['/home']);
      } else {
        this._router.navigate(['/login']);
      }
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get nameField(): any {
    return this.loginForm.get('name');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }
  loginFormSubmit(): void {
    console.log(this.loginForm.value);
    // Call Api
  }
}
