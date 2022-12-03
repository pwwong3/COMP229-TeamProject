import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from '../model/model.module';
import { RouterModule } from "@angular/router";
import { SurveyComponent } from "./survey.component";
import { RespondComponent } from './respond/respond.component';
import { CommonModule } from "@angular/common";

const routing = RouterModule.forChild([
    { path: '', component: SurveyComponent },
    { path: 'respond/:id', component: RespondComponent },
    //{ path: '**', redirectTo: '/' },
]);

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, routing],
    declarations: [SurveyComponent, RespondComponent],
    exports: [SurveyComponent, RespondComponent]
})
export class SurveyModule {}