import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit, AfterViewInit {
  @Input() Forms: any;
  @Input() Message: any;
  @Input() Title: any;

  @Output() formIdEmitter = new EventEmitter<any>();

  public formId: string = '';
  // public processed: string = '';
  selectedFormId: string = '';

  constructor() {
    // this.Unprocessed = this.UnprocessedForms
  }

  openforms(_id: string) {
    this.formId = _id;
    this.selectedFormId = this.formId;
    this.formIdEmitter.emit(_id);
  }

  // deleteForm(Form: any) {
  //   this.deleteIdEmitter.emit(Form.unid);
  // }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
