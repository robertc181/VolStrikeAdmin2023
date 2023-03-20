import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  @Input() showFormspaceComponent: boolean = false;

  constructor() {}

  goToForm() {
    this.showFormspaceComponent = true;
  }

  ngOnInit(): void {
  }

}
