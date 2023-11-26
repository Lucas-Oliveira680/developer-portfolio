import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ThemeToggleComponent} from "src/app/shared/components/theme-toggle/theme-toggle.component";
import {LanguageToggleComponent} from "src/app/shared/components/language-toggle/language-toggle.component";
import {TranslateModule} from "@ngx-translate/core";
import { AnimatedLogoComponent } from "src/app/shared/components/animated-logo/animated-logo.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ThemeToggleComponent,
    LanguageToggleComponent,
    RouterLinkActive,
    TranslateModule,
    AnimatedLogoComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
