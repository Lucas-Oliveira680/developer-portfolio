import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent {

  language: 'EN' | 'PT_BR' = 'PT_BR';

  toggleLanguage() {
    this.language = this.language === 'EN' ? 'PT_BR' : 'EN';
  }
}
