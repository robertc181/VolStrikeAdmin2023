import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formspace',
  templateUrl: './formspace.component.html',
  styleUrls: ['./formspace.component.scss']
})
export class FormspaceComponent implements OnInit {

  @Input() Form: any;
  @Output() processedEmitter = new EventEmitter<any>();

  processedForm: any[] = []

  constructor() { }

  // function processFile() {
    
  // }

  processFile (singleForm: any) {
    // singleForm.processed = true
    this.processedForm.push(singleForm);
    this.processedEmitter.emit(this.processedForm);
  }

  ngOnInit(): void {
  }



}
