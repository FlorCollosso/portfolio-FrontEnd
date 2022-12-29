import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
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
import { StartSessionComponent } from './components/start-session/start-session.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { interceptorProvider } from './services/interceptor-service';
import { NewWorkComponent } from './components/gallery-works/new-work.component';
import { EditWorkComponent } from './components/gallery-works/edit-work.component';

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
    StartSessionComponent,
    PortfolioComponent,
    NewWorkComponent,
    EditWorkComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
