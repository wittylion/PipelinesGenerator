import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";
import S from "string";

export class GenerateArgumentsResult {
    creationResult: CreatedFileResult;
    errorMessage: string;
    isError(): boolean {
        return !this.isError();
    }
    isSuccess(): boolean {
        return S(this.errorMessage).isEmpty();
    }
}