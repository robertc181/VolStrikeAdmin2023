import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // debugger;
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.homeService.getRequests().subscribe((res: HttpResponse<any[]>) => {
      console.log('zz');
      console.log(res);
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
