import { Component } from '@angular/core';
import {LanguageService} from "src/app/shared/services/language.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../styles/_buttons.scss']
})
export class HomeComponent {

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
}
