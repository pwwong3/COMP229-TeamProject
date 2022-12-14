import { UserResponse } from "./userResponse.model";

export class SurveyResponse {
    constructor (
        public _id?: string,
        public surveyId?: string,
        public responses?: UserResponse[],
        public userId?: string
    ){}

    public getResponse(questionsId: string): string {
        const response = this.responses.find(response => response.questionId === questionsId);
        return response? response.response : null;
    }
}