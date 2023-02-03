import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ToggleModeService } from '../shared/toggle-mode.service';


@Component({
  selector: 'app-alert-contact',
  templateUrl: './alert-contact.component.html',
  styleUrls: ['./alert-contact.component.scss']
})
export class AlertContactComponent implements OnInit {
@Output() closeModalEvent = new EventEmitter();
lightMode = false;

  constructor(private toggleModeService: ToggleModeService) {}

  ngOnInit() {
    this.toggleModeService.lightMode$.subscribe(lightMode_ => this.lightMode = lightMode_)
  }

  onCloseModal() {
    this.closeModalEvent.emit()
  }

}


