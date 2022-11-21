import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { SurveyResponse } from "./surveyResponse.model";

@Injectable()
export class SurveyResponseRepository {
    private surveyResponses: SurveyResponse[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getSurveyTemplates().subscribe(data => {
            this.surveyResponses = data;
        });
    }

    getSurveyResponses(surveyTemplateId: string = null): SurveyResponse[] {
        return this.surveyResponses
            .filter(st => surveyTemplateId === null || surveyTemplateId === st._id);
    }
}