import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeService} from "src/app/shared/services/theme.service";
import {LanguageService} from "src/app/shared/services/language.service";
import {EBreakpoints} from "src/app/shared/types/breakpoints.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMobile = window.innerWidth <= EBreakpoints.MD;

  constructor(private _languageService: LanguageService, private _themeService: ThemeService) {
  }

  ngOnInit() {
    const themeInLocalStorage = this._themeService.getTheme();
    const browserLanguage = navigator.language;
    const languageInLocalStorage = this._languageService.getLanguage();

    if(themeInLocalStorage) {
      this._themeService.updateTheme(themeInLocalStorage);
    } else {
      this._themeService.updateTheme('dark');
    }


    if(languageInLocalStorage) {
      this._languageService.setLanguage(languageInLocalStorage);
    } else {
      if(browserLanguage === 'pt-BR') {
        this._languageService.setLanguage('pt-br');
      } else {
        this._languageService.setLanguage('en');
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= EBreakpoints.MD;
  }


  title = 'Lucas Codes';
}
