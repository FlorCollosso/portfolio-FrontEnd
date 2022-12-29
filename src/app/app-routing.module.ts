import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { StartSessionComponent } from './components/start-session/start-session.component';
import { NewWorkComponent } from './components/gallery-works/new-work.component';
import { EditWorkComponent } from './components/gallery-works/edit-work.component';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent},
  {path:'iniciar-sesion', component: StartSessionComponent},
  {path:'', component: PortfolioComponent},
  {path:'nuevaexp', component: NewWorkComponent},
  {path:'editexp/:id', component: EditWorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
