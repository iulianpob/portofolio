import { OnInit, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';



@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AccordionComponent implements OnInit {
events!: any[];

ngOnInit(): void {
  this.events = [
    {status: 'Aspiring Front-End Junior seeking first opportunity', date: 'Present'},
    {status: 'Operational/General Manager @Meron', date: '1/04/2021 - 30/11/2022'},
    {status: 'Operational Specialist @Meron', date: '15/9/2020'},
    {status: 'Barista @Meron', date: '1/05/2019 '}
];
}
}
