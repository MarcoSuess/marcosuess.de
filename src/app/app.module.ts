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
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogSubmitReportComponent } from './dialog-submit-report/dialog-submit-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogLegalNoticeComponent } from './dialog-legal-notice/dialog-legal-notice.component';
import { DialogDataProtectionComponent } from './dialog-data-protection/dialog-data-protection.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeSectionComponent,
    HomeTextComponent,
    HomeImageComponent,
    HomeContactComponent,
    SkillsSectionComponent,
    WorkSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
    DialogSubmitReportComponent,
    DialogLegalNoticeComponent,
    DialogDataProtectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
