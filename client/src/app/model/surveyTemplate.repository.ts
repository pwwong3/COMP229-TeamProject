import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { SurveyTemplate } from "./surveyTemplate.model";

@Injectable()
export class SurveyTemplateRepository {
    private surveyTemplates: SurveyTemplate[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getSurveyTemplates().subscribe(data => {
            this.surveyTemplates = data;
        });
    }

    getSurveyTemplates(userId: string = null): SurveyTemplate[] {
        return this.surveyTemplates
            .filter(st => userId === null || userId === st.userId);
    }

    getSurveyTemplate(surveyTemplate: SurveyTemplate): SurveyTemplate {
        return this.surveyTemplates.find(st => st._id === surveyTemplate._id);
    }

    deleteSurveyTemplate(surveyTemplate: SurveyTemplate): void {
        this.dataSource.deleteSurveyTemplate(surveyTemplate);
    }
}