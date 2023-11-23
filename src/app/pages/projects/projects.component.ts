import { Component } from '@angular/core'
import { experiences } from './experiences'
import { projects } from './projects'
import { IWorkExperience } from 'src/app/pages/projects/interfaces/work-experience.interface'
import { IPortfolioProject } from 'src/app/pages/projects/interfaces/portfolio-project.interface'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  allProjects: IPortfolioProject[] = projects
  displayedProjects: IPortfolioProject[] = []
  currentPage: number = 1
  itemsPerPage: number = 4

  constructor() {
    this.updateDisplayedProjects()
  }

  get experiences(): IWorkExperience[] {
    return experiences
  }

  get projects(): IPortfolioProject[] {
    return projects
  }

  updateDisplayedProjects(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    this.displayedProjects = this.allProjects.slice(startIndex, startIndex + this.itemsPerPage)
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage
    this.updateDisplayedProjects()
  }
}
