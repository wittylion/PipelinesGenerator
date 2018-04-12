import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateProcessorFromScratchArguments extends PipelineContext {
    constructor(
        public model: GenerateFileModel,
        public argumentsModel: CreatedFileResult,
        public processorModel: CreatedFileResult,
    
    ) { 
        super();
    }
}
