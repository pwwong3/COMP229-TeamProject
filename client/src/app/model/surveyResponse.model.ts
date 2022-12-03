import { UserResponse } from "./userResponse.model";

export class SurveyResponse {
    constructor (
        public _id?: string,
        public surveyId?: string,
        public responses?: UserResponse[],
        public userId?: string
    ){}
}