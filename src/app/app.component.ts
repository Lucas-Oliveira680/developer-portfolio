import {Component, OnInit} from '@angular/core';
import {ThemeService} from "src/app/shared/services/theme.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(_translate: TranslateService, private _themeService: ThemeService) {
    _translate.setDefaultLang('en');

    _translate.use('en');
  }

  ngOnInit() {
    this._themeService.updateTheme('dark');
  }

  title = 'Lucas Codes';
}
