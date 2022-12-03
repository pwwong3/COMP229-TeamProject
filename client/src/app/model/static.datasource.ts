import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Question } from "./question.model";
import { SurveyResponse } from "./surveyResponse.model";
import { SurveyTemplate } from "./surveyTemplate.model";
import { UserResponse } from "./userResponse.model";

@Injectable()
export class StaticDataSource {
    private surveyTemplates: SurveyTemplate[] = [
        new SurveyTemplate(
            'st1',
            'Template 1',
            'Description 1',
            new Date(),
            new Date(),
            'MC',
            [
                new Question("1", 1, 'Question 1', []),
                new Question("2", 2, 'Question 2', ['Yes', 'No'])
            ],
            'u1'
        ),
        new SurveyTemplate(
            'st2',
            'Template 2',
            'Description 2',
            new Date(),
            new Date(),
            'MC',
            [
                new Question("3", 1, 'Question 1', []),
                new Question("4", 2, 'Question 2', ['Yes', 'No'])
            ],
            'u2'
        )
    ];

    private surveyResponses: SurveyResponse[] = [
        new SurveyResponse(
            'sr1',
            's1',
            [
                new UserResponse('q1', 'Response 1', new Question('q1', 1, 'Question 1', null)),
                new UserResponse('q2', 'Response 2', new Question('q2', 2, 'Question 2', null))
            ],
            'u1'
        ),
        new SurveyResponse(
            'sr2',
            's2',
            [
                new UserResponse('q1', 'Response 3', new Question('q1', 1, 'Question 1', null)),
                new UserResponse('q2', 'Response 4', new Question('q2', 2, 'Question 2', null))
            ],
            'u2'
        )
    ];

    getSurveyTemplates(): Observable<SurveyTemplate[]> {
        return from([this.surveyTemplates]);
    }

    getSurveyResponses(): Observable<SurveyResponse[]> {
        return from([this.surveyResponses]);
    }
}