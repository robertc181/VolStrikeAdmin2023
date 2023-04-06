import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-formspace',
  templateUrl: './formspace.component.html',
  styleUrls: ['./formspace.component.scss'],
})
export class FormspaceComponent implements OnInit {
  @Input() Form: any;
  @Output() processedEmitter = new EventEmitter<any>();
  @Output() deleteIdEmitter = new EventEmitter<any>();

  @ViewChild('printContainer', { static: false }) printContainer!: ElementRef;

  processedForm: any[] = [];
  showButtons = false;

  constructor() {}

  processFile(singleForm: any) {
    this.processedForm.push(singleForm);
    this.processedEmitter.emit(this.processedForm);
  }

  onDeleteClicked() {
    this.showButtons = true;
  }

  onCancelDelete() {
    this.showButtons = false;
  }

  deleteForm(Form: any) {
    this.deleteIdEmitter.emit(Form[0].unid);
    this.showButtons = false;
  }

  printContent() {
    const printContent = this.printContainer.nativeElement.innerHTML;
    const popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Print tab</title>
            <style>
              // Add your styles here
            </style>
          </head>
          <body onload="window.print();window.close()">${printContent}</body>
        </html>
      `);
      popupWin.document.close();
    }
  }

  ngOnInit(): void {}
}
