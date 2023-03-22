import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, AfterViewInit {

  @Input() Forms: any;
  @Input() Message: any;
  @Input() Title: any;

  @Output() formIdEmitter = new EventEmitter<string>();

  public formId: string = '';
  selectedFormId: string = '';

  constructor() { 
    // this.Unprocessed = this.UnprocessedForms
  }


  openforms(_id: any) {
    this.formId = _id;
    this.selectedFormId = this.formId;
    this.formIdEmitter.emit(_id);
  }


  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    
  }

}
