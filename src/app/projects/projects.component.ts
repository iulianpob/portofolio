import { Component } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
public projects: Project[] = [
  new Project('Omnifood', "Test description", "../assets/omnifood.png", 'https://iulianpobirci.netlify.app/'),
  new Project('Omnifood', "Test description", "assets/omnifood.png", 'https://iulianpobirci.netlify.app/'),
  new Project('Omnifood', "Test description", "assets/omnifood.png", 'https://iulianpobirci.netlify.app/'),
  new Project('Omnifood', "Test description", "assets/omnifood.png", 'https://iulianpobirci.netlify.app/'),
  new Project('Bankist', "Test description2", 'assets/bankist.png', 'https://bank-iulianpobirci.netlify.app/')
]
}
