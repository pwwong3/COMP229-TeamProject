import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { RestDataSource } from "./rest.datasource";
import { SurveyResponseRepository } from "./surveyResponse.repository";
import { SurveyTemplateRepository } from "./surveyTemplate.repository";
import { UserService } from "./user.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        SurveyTemplateRepository, SurveyResponseRepository, RestDataSource, AuthService, UserService
    ]
})
export class ModelModule {}