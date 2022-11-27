import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
//import { JwtHelperService } from "@auth0/angular-jwt"
import { User } from "./user.model";
import { SurveyTemplate } from "./surveyTemplate.model";
import { SurveyResponse } from "./surveyResponse.model";

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {
    user: User;
    baseUrl: string;
    authToken: string;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    };

    constructor (
        private http: HttpClient,
        //private jwtService: JwtHelperService
    ) {
        this.user = new User();
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    }

    getSurveyTemplates(): Observable<SurveyTemplate[]> {
        return this.http.get<SurveyTemplate[]>(`${this.baseUrl}survey`);
    }

    addSurveyTemplate(surveyTemplate: SurveyTemplate): Observable<SurveyTemplate> {
        console.log(JSON.stringify(surveyTemplate));
        return this.http.post<SurveyTemplate>(`${this.baseUrl}survey/add`, surveyTemplate);
    }

    editSurveyTemplate(surveyTemplate: SurveyTemplate): Observable<SurveyTemplate> {
        console.log(JSON.stringify(surveyTemplate));
        return this.http.post<SurveyTemplate>(`${this.baseUrl}survey/edit/${surveyTemplate._id}`, surveyTemplate);
    }

    saveSurveyResponse(surveyResponse: SurveyResponse): Observable<SurveyResponse> {
        console.log(JSON.stringify(surveyResponse));
        return this.http.post<SurveyResponse>(`${this.baseUrl}survey/respond/${surveyResponse._id}`, surveyResponse);
    }

    getSurveyResponses(id: String): Observable<SurveyResponse[]> {
        return this.http.get<SurveyResponse[]>(`${this.baseUrl}survey/report/${id}`);
    }
    
    authenticate(user: User): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}login`, user, this.httpOptions )
    }

    storeUserdata(token: any, user: User): void {
        localStorage.setItem('id_token', `Bearer ${token}`);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    logout(): Observable<any>{
        this.authToken = null;
        this.user = null;
        localStorage.clear();

        return this.http.get<any>(`${this.baseUrl}logout`, this.httpOptions);
    }

    // loggedIn(): boolean {
    //     return !this.jwtService.isTokenExpired(this.authToken);
    // }

    private loadToken(): void {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }
}