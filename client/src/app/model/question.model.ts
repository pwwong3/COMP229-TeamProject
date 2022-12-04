import { Option } from "./option.model";

export class Question {
    public _id?: string;
    public questionNumber?: number;
    public questionText?: string;
    public questionOptions: string[] = [];
    public questionOptionObjs: Option[] = [];
}