import { GenerateFileModel } from "../../GenerateFileFromTemplate/models/GenerateFileModel";
import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateProcessorModel extends GenerateFileModel {
    
    private _arguments: CreatedFileResult;
    public get arguments() : CreatedFileResult {
        return this.options["arguments"];
    }
    public set arguments(v : CreatedFileResult) {
        this.options["arguments"] = v;
    }
    
    public get abstractProcessor() : CreatedFileResult {
        return this.options["abstractProcessor"];
    }
    public set abstractProcessor(v : CreatedFileResult) {
        this.options["abstractProcessor"] = v;
    }
    
    
}