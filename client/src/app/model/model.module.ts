import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { SurveyResponseRepository } from "./surveyResponse.repository";
import { SurveyTemplateRepository } from "./surveyTemplate.repository";

@NgModule({
    providers: [SurveyTemplateRepository, SurveyResponseRepository, StaticDataSource]
})
export class SurveyModule {}