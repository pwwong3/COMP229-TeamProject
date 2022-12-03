import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SurveyResponse } from 'src/app/model/surveyResponse.model';
import { SurveyResponseRepository } from 'src/app/model/surveyResponse.repository';
import { SurveyTemplate } from 'src/app/model/surveyTemplate.model';
import { SurveyTemplateRepository } from 'src/app/model/surveyTemplate.repository';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public user: User;
  public survey: SurveyTemplate;
  public surveyResponses: SurveyResponse[];

  constructor(
    private templateRepository: SurveyTemplateRepository,
    private responseRepository: SurveyResponseRepository,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.survey = this.templateRepository.getSurveyTemplate({ _id: this.route.snapshot.paramMap.get('id')});
    this.responseRepository.getResponses(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log(JSON.stringify(data));
      console.log(`responses: ${data.length}`);
      this.surveyResponses = data;
    });
  }

  getUserResponse(surveyResponse: SurveyResponse, questionId: string) {
    const response = surveyResponse.responses.find(response => response.questionId === questionId);
    return response? response.response : null;
  }

  print(){
    window.print();
  }
}
