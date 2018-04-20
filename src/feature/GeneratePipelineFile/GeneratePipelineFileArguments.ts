import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

import Generator = require("yeoman-generator");
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";

export class GeneratePipelineFileArguments extends YeomanQueryContext<CreatedFileResult> {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
    ): GeneratePipelineFileArguments {
        return new GeneratePipelineFileArguments(fileModel, yeomanGenerator);
    }

    constructor(
        public fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
    ) {
        super(yeomanGenerator);
    }

    abstractProcessor: CreatedFileResult;
    
    processors: CreatedFileResult[] = [];
}
