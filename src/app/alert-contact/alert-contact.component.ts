import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-alert-contact',
  templateUrl: './alert-contact.component.html',
  styleUrls: ['./alert-contact.component.scss']
})
export class AlertContactComponent {
@Output() closeModalEvent = new EventEmitter();

  constructor() {}

  onCloseModal() {
    this.closeModalEvent.emit()
  }

}


