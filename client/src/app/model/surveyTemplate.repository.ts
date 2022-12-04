import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { SurveyTemplate } from "./surveyTemplate.model";

@Injectable()
export class SurveyTemplateRepository {
    constructor(private dataSource: RestDataSource) {}

    getSurveyTemplates(): Observable<SurveyTemplate[]> {
        return this.dataSource.getSurveyTemplates();
    }

    getSurveyTemplate(surveyTemplate: SurveyTemplate): Observable<SurveyTemplate> {
        return this.dataSource.getSurveyTemplate(surveyTemplate);
    }

    addSurveyTemplate(surveyTemplate: SurveyTemplate): Observable<SurveyTemplate> {
        return this.dataSource.addSurveyTemplate(surveyTemplate);
    }

    editSurveyTemplate(surveyTemplate: SurveyTemplate): Observable<SurveyTemplate> {
        return this.dataSource.editSurveyTemplate(surveyTemplate);
    }

    deleteSurveyTemplate(surveyTemplate: SurveyTemplate): Observable<any> {
        return this.dataSource.deleteSurveyTemplate(surveyTemplate);
    }
}