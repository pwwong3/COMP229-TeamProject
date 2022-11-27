import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from '../model/model.module';
import { RouterModule } from "@angular/router";
import { SurveyComponent } from "./survey.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [SurveyComponent],
    exports: [SurveyComponent]
})
export class SurveyModule {}