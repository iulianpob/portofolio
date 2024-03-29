import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ToggleModeService } from '../shared/toggle-mode.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class HeaderComponent implements OnInit {
@Output() showModalEvent = new EventEmitter();
lightMode = false;

  constructor(private toggleModeService:ToggleModeService) {}

  ngOnInit() {
    this.toggleModeService.lightMode$.subscribe(lightMode_ => this.lightMode = lightMode_)
  }

  onShowModal() {
    this.showModalEvent.emit()
  }

  ////
  display= false;

  showDialog() {
      this.display = !this.display
  }




}
