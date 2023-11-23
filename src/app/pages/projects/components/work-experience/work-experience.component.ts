import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IWorkExperience } from 'src/app/pages/projects/interfaces/work-experience.interface'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  @Input() workExperience!: IWorkExperience
}
