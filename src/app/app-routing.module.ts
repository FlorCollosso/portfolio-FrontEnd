import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { StartSessionComponent } from './components/start-session/start-session.component';
import { NewWorkComponent } from './components/gallery-works/new-work.component';
import { EditWorkComponent } from './components/gallery-works/edit-work.component';
import { NewEduComponent } from './components/carousel-education/new-edu.component';
import { EditEduComponent } from './components/carousel-education/edit-edu.component';
import { NewProComponent } from './components/carousel-projects/new-pro.component';
import { EditProComponent } from './components/carousel-projects/edit-pro.component';
import { NewSkillComponent } from './components/percentages-skills/new-skill.component';
import { EditSkillComponent } from './components/percentages-skills/edit-skill.component';
import { EditInfoComponent } from './components/info-about/edit-info.component';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent},
  {path:'iniciar-sesion', component: StartSessionComponent},
  {path:'', component: PortfolioComponent},
  {path:'editinfo/:id', component: EditInfoComponent},
  {path:'nuevaexp', component: NewWorkComponent},
  {path:'editexp/:id', component: EditWorkComponent},
  {path:'nuevaedu', component: NewEduComponent},
  {path:'editedu/:id', component: EditEduComponent},
  {path:'nuevopro', component: NewProComponent},
  {path:'editpro/:id', component: EditProComponent},
  {path:'nuevaskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
