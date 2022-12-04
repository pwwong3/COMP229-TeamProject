import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public surveyTemplates: SurveyTemplate[];

  constructor(
    private repository: SurveyTemplateRepository,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.refresh();
  }

  deleteSurvey(surveyTemplate: SurveyTemplate): void
  {
    console.log("delete");
    this.repository.deleteSurveyTemplate(surveyTemplate).subscribe(data => {
      this.refresh();
    });
  }

  refresh(){
    this.repository.getSurveyTemplates().subscribe(data => this.surveyTemplates = data);
  }
}
