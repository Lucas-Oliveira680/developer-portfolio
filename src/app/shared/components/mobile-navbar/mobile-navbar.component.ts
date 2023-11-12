import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ThemeService} from "src/app/shared/services/theme.service";
import {LanguageToggleComponent} from "src/app/shared/components/language-toggle/language-toggle.component";

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, RouterLinkActive, LanguageToggleComponent],
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent {

  constructor(private _themeService: ThemeService) {

  }

  toggleTheme() {
    this._themeService.toggleTheme();
  }

  get currentTheme() {
    return this._themeService.currentTheme();
  }

}
