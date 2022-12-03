import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../model/question.model';
import { SurveyResponse } from '../model/surveyResponse.model';
import { SurveyTemplate } from '../model/surveyTemplate.model';
import { SurveyTemplateRepository } from '../model/surveyTemplate.repository';
import { User } from '../model/user.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  public user: User;

  constructor(
    private repository: SurveyTemplateRepository,
    //private surveyTemplate: SurveyTemplate,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  get surveyTemplates(): SurveyTemplate[]
  {
    console.log("hello world")
    console.log(this.repository.getSurveyTemplates());
    return this.repository.getSurveyTemplates();
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

  reportSurvey(surveyTemplate: SurveyTemplate): void
  {
    this.router.navigateByUrl(`./report/${surveyTemplate._id}`);
  }
}
