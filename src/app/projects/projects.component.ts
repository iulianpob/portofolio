import { Component } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
public projects: Project[] = [
  new Project('First to 100', "In this project, I combined my skills in HTML, CSS, and JavaScript to create a fun and interactive two-player game. Players compete to reach 100 points, with the first to do so declared the winner. With dynamic styling and animations in CSS, and dynamic game logic in JavaScript.", "assets/first100.png", 'https://first100-iulianpobirci.netlify.app/'),
  new Project('Bankist', "In this project, I utilized my expertise in HTML, CSS, and JavaScript to develop a web-based fake banking application. The app allows customers to manage their finances with ease, including features such as making transfers, requesting loans, deleting accounts, and sorting current balance.", 'assets/bankist.png', 'https://bank-iulianpobirci.netlify.app/')
]
}
