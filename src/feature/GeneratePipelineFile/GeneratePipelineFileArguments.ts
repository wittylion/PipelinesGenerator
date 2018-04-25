import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

import Generator = require("yeoman-generator");
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";
import { GenerateFileFromTemplateExecutor } from "../GenerateFileFromTemplate";

export class GeneratePipelineFileArguments extends YeomanQueryContext<CreatedFileResult> {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        fileGenerator: GenerateFileFromTemplateExecutor
    ): GeneratePipelineFileArguments {
        return new GeneratePipelineFileArguments(fileModel, yeomanGenerator, fileGenerator);
    }

    constructor(
        public fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        public fileGenerator: GenerateFileFromTemplateExecutor
    ) {
        super(yeomanGenerator);
    }

    abstractProcessor: CreatedFileResult;
    
    processors: CreatedFileResult[] = [];
}
