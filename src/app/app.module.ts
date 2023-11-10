import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "src/app/shared/components/navbar/navbar.component";
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import {ThemeToggleComponent} from "src/app/shared/components/theme-toggle/theme-toggle.component";
import {TypewriterDirective} from "src/app/shared/directives/typewriter.directive";
import {EarthComponent} from "src/app/shared/components/earth/earth.component";
import {ButtonComponent} from "src/app/shared/components/button/button.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    NavbarComponent,
    ThemeToggleComponent,
    TypewriterDirective,
    EarthComponent,
      HttpClientModule,
      ButtonComponent,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient],
          },
          // useDefaultLang: false,
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
