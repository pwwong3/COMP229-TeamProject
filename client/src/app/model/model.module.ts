import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { SurveyResponseRepository } from "./surveyResponse.repository";
import { SurveyTemplateRepository } from "./surveyTemplate.repository";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        SurveyTemplateRepository, SurveyResponseRepository, RestDataSource, AuthService,
        { provide: StaticDataSource, useClass: RestDataSource }
    ]
})
export class ModelModule {}