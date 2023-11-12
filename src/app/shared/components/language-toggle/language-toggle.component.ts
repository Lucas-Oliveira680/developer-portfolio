import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "src/app/shared/services/language.service";

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent {

  constructor(private _languageService: LanguageService) {
  }


  toggleLanguage() {
    if(!this.language) return;

    const currentLang = this.language;

    if(currentLang === 'en') {
      this._languageService.setLanguage('pt-br');
    }
    if(currentLang === 'pt-br') {
      this._languageService.setLanguage('en');
    }
  }

  get language():string | null {
    return this._languageService.getLanguage()
  }
}
