import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ThemeToggleComponent} from "src/app/shared/components/theme-toggle/theme-toggle.component";
import {LanguageToggleComponent} from "src/app/shared/components/language-toggle/language-toggle.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, ThemeToggleComponent, LanguageToggleComponent, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
