import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { YeomanContext, YeomanQueryContext } from "../../foundation/PipelinesExtensions";

import Generator = require("yeoman-generator");
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { GenerateFileFromTemplateExecutor } from "../GenerateFileFromTemplate";

export class GenerateExecutorFileArguments extends YeomanQueryContext<CreatedFileResult> {
    
    argumentsClassName: string;
    argumentsFileName: string;
    
    pipelineClassName: string;
    pipelineFileName: string;

    constructor(
        public fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        public fileGenerator: GenerateFileFromTemplateExecutor,
        public possibleName?: string,
        public interactionMode?: InteractionModeEnum
    ) {
        super(yeomanGenerator);

    }
}
