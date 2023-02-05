import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-testimonial',
  templateUrl: './mobile-testimonial.component.html',
  styleUrls: ['./mobile-testimonial.component.scss']
})
export class MobileTestimonialComponent {
  events = [
    {status: 'Aspiring Front-End Junior seeking first opportunity', date: 'Present'},
    {status: 'Operational/General Manager @Meron', date: '1/04/2021 - 30/11/2022'},
    {status: 'Operational Specialist @Meron', date: '15/9/2020'},
    {status: 'Barista @Meron', date: '1/05/2019 '}
]
}
