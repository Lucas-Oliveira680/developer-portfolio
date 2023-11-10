import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

const LANGUAGE = 'lang';

@Injectable({
  providedIn: 'root'
})


export class LanguageService {

  constructor(private _translate: TranslateService) { }

  getLanguage(): string | null {
    return window.localStorage.getItem(LANGUAGE);
  }

  setLanguage(lang: string): void {
    lang && window.localStorage.setItem(LANGUAGE, lang);
    this._translate.use(lang);
  }
}
