import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import Generator = require("yeoman-generator");
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { GenerateFileFromTemplateExecutor } from "../GenerateFileFromTemplate";

export class GenerateAbstractProcessorFileArguments extends YeomanQueryContext<CreatedFileResult> {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        fileGenerator: GenerateFileFromTemplateExecutor,
        possibleName?: string,
        possibleExtension?: string,
        argumentsClassName?: string,
        argumentsFileName?: string,
        interactionMode?: InteractionModeEnum
    ): GenerateAbstractProcessorFileArguments {
        return new GenerateAbstractProcessorFileArguments(
            fileModel,
            yeomanGenerator,
            fileGenerator,
            possibleName,
            argumentsClassName,
            argumentsFileName,
            interactionMode);
    }

    constructor(
        public fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        public fileGenerator: GenerateFileFromTemplateExecutor,
        public possibleName?: string,
        public argumentsClassName?: string,
        public argumentsFileName?: string,
        public interactionMode?: InteractionModeEnum) {
        super(yeomanGenerator);

    }

    argumentsImportPath: string = "";
}
