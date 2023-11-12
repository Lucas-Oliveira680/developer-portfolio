import {Component, HostListener} from '@angular/core';
import {LanguageService} from "src/app/shared/services/language.service";
import {EBreakpoints} from "src/app/shared/types/breakpoints.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../styles/_buttons.scss']
})
export class HomeComponent {
  isMobile = window.innerWidth <= EBreakpoints.MD;

  constructor(private languageService: LanguageService) {
  }

  openResume() {
    const currentLang = this.languageService.getLanguage();
    if(!currentLang) return;

    if(currentLang === 'en') {
      window.open('/assets/resume/lucas_oliveira_resume.pdf', '_blank');
    }
    if(currentLang === 'pt-br') {
      window.open('/assets/resume/lucas_oliveira_curriculo.pdf', '_blank');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= EBreakpoints.MD;
  }



}
