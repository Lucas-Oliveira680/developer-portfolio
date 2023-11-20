import { Component } from '@angular/core'
import { experiences } from './experiences'
import { IWorkExperience } from 'src/app/pages/projects/interfaces/work-experience.interface'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  get experiences(): IWorkExperience[] {
    return experiences
  }
}
