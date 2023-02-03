import { Component, OnInit } from '@angular/core';
import { ToggleModeService } from '../shared/toggle-mode.service';



@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  // @Output() hideAside = new EventEmitter<boolean>();
  lightMode = false;
  showMenu = true;

  constructor(private toggleModeService: ToggleModeService) {}

  ngOnInit() {
    this.toggleModeService.lightMode$.subscribe(lightMode_ => this.lightMode = lightMode_)
  }


  onToggleMode() {
    this.lightMode = !this.lightMode;
    this.toggleModeService.toggleLightMode(this.lightMode)
  }

  // onToggleMenu() {
  //   this.hideAside.emit()
  //   this.showMenu = !this.showMenu
  // }


}
