import { Component, OnInit } from '@angular/core';
import { ToggleModeService } from './shared/toggle-mode.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showModal = false
  lightMode = false
  showMenu = true;
  
 
  constructor(private toggleModeService:ToggleModeService) {}

  ngOnInit() {
    this.toggleModeService.lightMode$.subscribe(lightMode_ => this.lightMode = lightMode_)
  }


onShowModal() {
this.showModal = true;
}

onCloseModal() {
  this.showModal = false;
}

onToggleAside() {
  this.showMenu = !this.showMenu
}

}
