import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SurveyComponent } from "./survey.component";
import { RespondComponent } from './respond/respond.component';
import { CommonModule } from "@angular/common";
import { ReportComponent } from './report/report.component';

const routing = RouterModule.forChild([
    { path: '', component: SurveyComponent },
    { path: 'respond/:id', component: RespondComponent },
    { path: 'report/:id', component: ReportComponent },
    //{ path: '**', redirectTo: '/' },
]);

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, routing],
    declarations: [SurveyComponent, RespondComponent, ReportComponent],
    exports: [SurveyComponent, RespondComponent, ReportComponent]
})
export class SurveyModule {}