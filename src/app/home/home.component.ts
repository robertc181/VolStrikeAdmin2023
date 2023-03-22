import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input, ViewChild, Directive, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { InboxComponent } from './inbox/inbox.component';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild(InboxComponent) child!: InboxComponent;

  public forms: any[] = [];
  public message: string = '';
  public title: string = '';
  public openForm: any[] = [];

  requests: any[] = [];

  loginForm!: FormGroup;

  constructor(
    private homeService: HomeService,
    private apiService: ApiService 
  ){}

  ngOnInit(): void {

    this.openUnprocessed()

    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.homeService.getRequests().subscribe((res: HttpResponse<any[]>) => {
      console.log('zz');
      console.log(res);
    });

    this.apiService.getRequests().subscribe((data: any[]) => {
      console.log(data);
      this.requests = data;
    });
  }

  openUnprocessed() {
    this.apiService.getRequests().subscribe((data: any[]) => {
      this.forms = data.filter(request => !('processed' in request) || request.processed === false);
      this.title = 'Unprocessed'
      this.message = ''; 
    });
  }

  openProcessed() {
    // debugger
    this.apiService.getRequests().subscribe((data: any[]) => {
      const filteredRequests = data.filter(request => request.processed === true);
      this.forms = filteredRequests;
      this.title = 'Processed'

    if (filteredRequests.length > 0) {
      this.message = ''; 
      // clear the message if there are processed requests
    } else {
      this.message = "There are no processed files"
      // Do something with the message, e.g. display it in the UI
    }
    });
  }

  handleFormId(formId: string) {
    console.log(`Received formId: ${formId}`);
      this.apiService.getRequests().subscribe((data: any[]) => {
      this.openForm = data.filter(request => request._id === formId);
      console.log(this.openForm);

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
