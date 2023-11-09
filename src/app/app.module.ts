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
    TypewriterDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
