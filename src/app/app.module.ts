import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { HomeTextComponent } from './home-text/home-text.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeSectionComponent,
    HomeTextComponent,
    HomeImageComponent,
    HomeContactComponent,
    SkillsSectionComponent,
    WorkSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
