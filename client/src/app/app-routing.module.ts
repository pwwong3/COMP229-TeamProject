import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'survey', component: SurveyComponent, data: { title: 'Surveys' } },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
