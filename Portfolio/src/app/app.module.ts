import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselProjectsComponent } from './components/carousel-projects/carousel-projects.component';
import { SwiperModule } from "swiper/angular";
import { CarouselEducationComponent } from './components/carousel-education/carousel-education.component';
import { PercentagesSkillsComponent } from './components/percentages-skills/percentages-skills.component';
import { GalleryWorksComponent } from './components/gallery-works/gallery-works.component';
import { InfoAboutComponent } from './components/info-about/info-about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CoverComponent } from './components/cover/cover.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselProjectsComponent,
    CarouselEducationComponent,
    PercentagesSkillsComponent,
    GalleryWorksComponent,
    InfoAboutComponent,
    FooterComponent,
    HeaderComponent,
    CoverComponent,
    AboutComponent,
    WorksComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
