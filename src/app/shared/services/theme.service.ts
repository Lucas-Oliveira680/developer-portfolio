import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = signal('light');

  toggleTheme() {
    this.currentTheme() === 'light' ? this.currentTheme.set('dark') : this.currentTheme.set('light');
    this.updateTheme(this.currentTheme());
  }

  updateTheme(theme: string) {
    document.documentElement.setAttribute('data-theme',theme);
  }
}
