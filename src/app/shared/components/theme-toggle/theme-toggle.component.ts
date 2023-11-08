import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeService} from "src/app/shared/services/theme.service";

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent  {


  constructor(private _themeService: ThemeService) {

  }

  toggleState() {
    this._themeService.toggleTheme();
  }

  get currentTheme() {
    return this._themeService.currentTheme();
  }
}
