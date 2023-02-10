import { Component } from '@angular/core';
import { ToggleModeService } from '../shared/toggle-mode.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
lightMode = false

constructor(private toggleModeService: ToggleModeService) {}

ngOnInit() {
  this.toggleModeService.lightMode$.subscribe(lightMode_ => this.lightMode = lightMode_)
}

}
