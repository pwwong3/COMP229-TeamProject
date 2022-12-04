import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { SurveyTemplate } from 'src/app/model/surveyTemplate.model';
import { SurveyTemplateRepository } from 'src/app/model/surveyTemplate.repository';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public user: User;
  public surveyId: string;
  public survey: SurveyTemplate;

  constructor(
    private templateRepository: SurveyTemplateRepository,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.surveyId = this.route.snapshot.paramMap.get('id');
    this.survey = new SurveyTemplate();
    if(this.surveyId) {
      this.templateRepository.getSurveyTemplate({ _id: this.route.snapshot.paramMap.get('id')}).subscribe(data => this.survey = data);
    }
  }

  addQuestion() {
    this.survey.questions = [...this.survey.questions, new Question()];
  }

  removeQuestion(qustion: Question) {
    this.survey.questions = this.survey.questions.filter(q => q._id !== qustion._id);
  }

  addOption(question: Question) {
    this.survey.questions.forEach(q => {
      if (q._id === question._id) q.questionOptions = [...q.questionOptions, ""];
    });
  }

  removeOption(question: Question, option: string) {
    this.survey.questions.forEach(q => {
      if (q._id === question._id) q.questionOptions = q.questionOptions.filter(o => o !== option);
    });
  }

  submitTemplate(form: NgForm): void {
    if (form.valid) {
      this.survey.userId = this.user.id;
      if(this.surveyId) {
        console.table(this.survey);
        this.templateRepository.editSurveyTemplate(this.survey).subscribe(() => this.router.navigateByUrl('/survey'));
      }
      else{
        this.templateRepository.addSurveyTemplate(this.survey).subscribe(() => this.router.navigateByUrl('/survey'));
      }
    }
  }
}
