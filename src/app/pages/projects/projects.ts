import { IPortfolioProject } from 'src/app/pages/projects/interfaces/portfolio-project.interface'

export const projects: IPortfolioProject[] = [
  {
    name: 'PAGES.PROJECTS.GALLERY.PORTFOLIO.NAME',
    image: 'assets/projects-ss/Lucas Portfolio Preview.png',
    description: 'PAGES.PROJECTS.GALLERY.PORTFOLIO.DESCRIPTION',
    url: 'https://lucascodes.dev/',
    sourceCode: 'https://github.com/Lucas-Oliveira680/developer-portfolio',
    workInProgress: false,
  },
  {
    name: 'PAGES.PROJECTS.GALLERY.CSS_TOOLKIT.NAME',
    image: 'assets/projects-ss/CSS Toolkit Preview.png',
    description: 'PAGES.PROJECTS.GALLERY.CSS_TOOLKIT.DESCRIPTION',
    url: 'https://csstoolkit.vercel.app/',
    sourceCode: 'https://github.com/Lucas-Oliveira680/csstoolkit',
    workInProgress: true,
  },
  {
    name: 'PAGES.PROJECTS.GALLERY.TRANQUIL_HARMONY.NAME',
    image: 'assets/projects-ss/Tranquil Harmony Theme.png',
    description: 'PAGES.PROJECTS.GALLERY.TRANQUIL_HARMONY.DESCRIPTION',
    workInProgress: true,
  },
]
