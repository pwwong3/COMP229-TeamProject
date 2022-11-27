import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyTemplate } from '../model/surveyTemplate.model';
import { SurveyTemplateRepository } from '../model/surveyTemplate.repository';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  public userId?: string = null;

  constructor(
    private repository: SurveyTemplateRepository,
    private router: Router
  ) { }

  get surveyTemplates(): SurveyTemplate[]
  {
    console.log(this.repository.getSurveyTemplates());
    return this.repository.getSurveyTemplates(this.userId);
  }

  addSurvey(): void
  {
    this.router.navigateByUrl('./add');
  }

  editSurvey(surveyTemplate: SurveyTemplate): void
  {
    this.router.navigateByUrl(`./edit/${surveyTemplate._id}`);
  }

  deleteSurvey(surveyTemplate: SurveyTemplate): void
  {
    this.repository.deleteSurveyTemplate(surveyTemplate);
  }

  respondSurvey(surveyTemplate: SurveyTemplate): void
  {
    this.router.navigateByUrl(`./respond/${surveyTemplate._id}`);
  }

  reportSurvey(surveyTemplate: SurveyTemplate): void
  {
    this.router.navigateByUrl(`./report/${surveyTemplate._id}`);
  }
}
