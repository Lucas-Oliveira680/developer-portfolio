import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IPortfolioProject } from 'src/app/pages/projects/interfaces/portfolio-project.interface'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss',
})
export class PortfolioProjectComponent {
  @Input() portfolioProject: IPortfolioProject = {
    name: '',
    image: '',
    description: '',
    url: '',
  }
  viewInfo: boolean = false

  toggleView() {
    this.viewInfo = !this.viewInfo
  }
}
