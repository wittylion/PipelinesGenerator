import { PipelineContext, QueryContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { GenerateProcessorFileExecutor } from "../GenerateProcessorFile";

import { GenerateFileFromTemplateExecutor } from "../GenerateFileFromTemplate";
import { GenerateProcessorModel } from "../GenerateProcessorFile/models/GenerateProcessorModel";

export class GenerateProcessorFromScratchArguments extends QueryContext<CreatedFileResult> {
    constructor(
        public fileGenerator: GenerateFileFromTemplateExecutor,
        public processorGenerator: GenerateProcessorFileExecutor,
        public model: GenerateProcessorModel,
        public argumentsModel?: CreatedFileResult,
        public processorModel?: CreatedFileResult,

    ) {
        super();
    }

    guesses: string[] = [];
}
