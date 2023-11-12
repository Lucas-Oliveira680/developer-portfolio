import {Injectable, signal} from '@angular/core';

const THEME = 'theme';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = signal('dark');

  toggleTheme() {
    this.currentTheme() === 'light' ? this.currentTheme.set('dark') : this.currentTheme.set('light');
    this.updateTheme(this.currentTheme());
  }

  updateTheme(theme: string) {
    document.documentElement.setAttribute('data-theme',theme);
    window.localStorage.setItem(THEME, theme);
    this.currentTheme.set(theme);
  }

  getTheme() {
    return window.localStorage.getItem(THEME);
  }
}
