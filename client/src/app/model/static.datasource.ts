import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Question } from "./question.model";
import { SurveyResponse } from "./surveyResponse.model";
import { SurveyTemplate } from "./surveyTemplate.model";
import { User } from "./user.model";
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
                new Question(1, 'Question 1', []),
                new Question(2, 'Question 2', ['Yes', 'No'])
            ],
            'u1',
            new Date(),
            new Date()
        ),
        new SurveyTemplate(
            'st2',
            'Template 2',
            'Description 2',
            new Date(),
            new Date(),
            'MC',
            [
                new Question(1, 'Question 1', []),
                new Question(2, 'Question 2', ['Yes', 'No'])
            ],
            'u2',
            new Date(),
            new Date()
        )
    ];

    private surveyResponses: SurveyResponse[] = [
        new SurveyResponse(
            'sr1',
            's1',
            [
                new UserResponse('ur1', 'q1', 'Response 1'),
                new UserResponse('ur2', 'q2', 'Response 2')
            ],
            'u1',
            new Date(),
            new Date()
        ),
        new SurveyResponse(
            'sr2',
            's2',
            [
                new UserResponse('ur3', 'q1', 'Response 3'),
                new UserResponse('ur4', 'q2', 'Response 4')
            ],
            'u2',
            new Date(),
            new Date()
        )
    ];

    private users: User[] = [
        new User('u1', 'ada', 'adaw@my.centennialcollege.ca', 'Ada Wong', new Date(), new Date()),
        new User('u2', 'berry', 'berry@my.centennialcollege.ca', 'Berry', new Date(), new Date()),
    ];

    getSurveyTemplates(): Observable<SurveyTemplate[]> {
        return from([this.surveyTemplates]);
    }

    getSurveyResponses(): Observable<SurveyResponse[]> {
        return from([this.surveyResponses]);
    }

    getUsers(): Observable<User[]> {
        return from([this.users]);
    }
}