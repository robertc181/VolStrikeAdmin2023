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
  // loginForm!: FormGroup;
  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  router: any;

  // constructor(private router: Router) {}
  // private http: HttpClient
    constructor(
      private http: HttpClient,
      private apiService: ApiService
    ) {}


    // submitLoginForm() {
    //   debugger
    //   const { name, password } = this.loginForm.value;
    //   const loginData = { name, password };
    
    //   this.http.post('/login', loginData)
    //     .subscribe(
    //       (response: any) => {
    //         // retrieve the expected name and password from the server response
    //         const expectedName = response.expectedName;
    //         const expectedPassword = response.expectedPassword;
            
    //         if (name === expectedName && password === expectedPassword) {
    //           // if the name and password match the expected values, handle success
    //           console.log('Login Successful!');
    //         } else {
    //           // if the name and password do not match the expected values, handle error
    //           console.error('Invalid Login Credentials');
    //         }
    //       },
    //       (error) => {
    //         // handle error
    //         console.error(error);
    //       }
    //     );
    // }

    submitLoginForm() {
      const { name, password } = this.loginForm.value;
      const loginData = { name, password };
    
      this.apiService.submitLoginForm(loginData).subscribe({
        next: (response: any) => {
          // if the login is successful, handle success
          console.log('Login Successful!');
          // navigate to the dashboard component
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          // if the login fails, handle error
          console.error('Invalid Login Credentials');
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
