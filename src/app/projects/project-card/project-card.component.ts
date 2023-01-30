import { Component, Input } from '@angular/core';
import { Project } from 'src/app/shared/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
 @Input('proiecteChild') projects!: Project[];

}
