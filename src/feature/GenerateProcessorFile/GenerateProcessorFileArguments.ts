import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";
import Generator = require("yeoman-generator");
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateProcessorFileArguments extends YeomanQueryContext<CreatedFileResult> {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
    ): GenerateProcessorFileArguments {
        return new GenerateProcessorFileArguments(fileModel, yeomanGenerator);
    }

    constructor(
        public fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
    ) {
        super(yeomanGenerator);
    }

    arguments: CreatedFileResult;
    argumentsImportStatement: string;

    abstractProcessor: CreatedFileResult;
    processorImportStatement: string;
}
