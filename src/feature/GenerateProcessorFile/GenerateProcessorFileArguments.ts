import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";
import Generator = require("yeoman-generator");
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { GenerateFileFromTemplateExecutor } from "../GenerateFileFromTemplate";

export class GenerateProcessorFileArguments extends YeomanQueryContext<CreatedFileResult> {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        fileGenerator: GenerateFileFromTemplateExecutor,
    ): GenerateProcessorFileArguments {
        return new GenerateProcessorFileArguments(fileModel, yeomanGenerator, fileGenerator);
    }

    constructor(
        public fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        public fileGenerator: GenerateFileFromTemplateExecutor,
    ) {
        super(yeomanGenerator);
    }

    arguments: CreatedFileResult;
    abstractProcessor: CreatedFileResult;
}
