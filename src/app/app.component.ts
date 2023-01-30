import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showModal = false
  
 
onShowModal() {
this.showModal = true;
}

onCloseModal() {
  this.showModal = false;
}

  constructor() {}

  ngOnInit(): void {

  }

 


}
