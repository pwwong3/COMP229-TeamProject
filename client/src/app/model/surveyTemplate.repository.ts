import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { SurveyTemplate } from "./surveyTemplate.model";

@Injectable()
export class SurveyTemplateRepository {
    private surveyTemplates: SurveyTemplate[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getSurveyTemplates().subscribe(data => {
            this.surveyTemplates = data;
        });
    }

    getSurveyTemplates(userId: string = null): SurveyTemplate[] {
        return this.surveyTemplates
            .filter(st => userId === null || userId === st.userId);
    }

    getSurveyTemplate(id: string): SurveyTemplate {
        return this.surveyTemplates.find(st => st._id === id);
    }
}