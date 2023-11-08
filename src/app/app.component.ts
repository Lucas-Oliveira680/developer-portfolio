import {Component, OnInit} from '@angular/core';
import {ThemeService} from "src/app/shared/services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _themeService: ThemeService) {

  }

  ngOnInit() {
    this._themeService.updateTheme('light');
  }

  title = 'portfolio';
}
