import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-formspace',
  templateUrl: './formspace.component.html',
  styleUrls: ['./formspace.component.scss']
})
export class FormspaceComponent implements OnInit, AfterViewInit {

  @Input() Form: any;

  constructor() { }

  ngOnInit(): void {
    console.log("ttttttttttttttttttttttt")
    console.log(this.Form)
  }

  ngAfterViewInit(): void {
    console.log("etehgdjdjjjfbv;eifvb;edfjbv;fdjnb")
    console.log(this.Form)
  }

}
