import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeService} from "src/app/shared/services/theme.service";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "src/app/shared/services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  browserLanguage: string | null = null;

  constructor(private _languageService: LanguageService, private _themeService: ThemeService) {
  }

  ngOnInit() {
    const themeInLocalStorage = this._themeService.getTheme();

    if(themeInLocalStorage) {
      this._themeService.updateTheme(themeInLocalStorage);
    } else {
      this._themeService.updateTheme('dark');
    }

    this.browserLanguage = navigator.language;
    const languageInLocalStorage = this._languageService.getLanguage()

    if(languageInLocalStorage) {
      this._languageService.setLanguage(languageInLocalStorage);
    }

    if(this.browserLanguage === 'pt-BR') {
      this._languageService.setLanguage('pt-br');
    } else {
      this._languageService.setLanguage('en');
    }

  }


  title = 'Lucas Codes';
}
