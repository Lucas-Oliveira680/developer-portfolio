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

  language: 'EN' | 'PT-BR' = 'EN';

  toggleLanguage() {
    this.language = this.language === 'EN' ? 'PT-BR' : 'EN';
    this._languageService.setLanguage(this.language.toLowerCase())
  }
}
