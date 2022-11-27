import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { SurveyResponseRepository } from "./surveyResponse.repository";
import { SurveyTemplateRepository } from "./surveyTemplate.repository";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        SurveyTemplateRepository, SurveyResponseRepository, StaticDataSource, RestDataSource,
        { provide: StaticDataSource, useClass: RestDataSource }
    ]
})
export class ModelModule {}