import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import Generator = require("yeoman-generator");
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { GenerateFileFromTemplateExecutor } from "../GenerateFileFromTemplate";

export class GenerateArgumentsFileArguments extends YeomanQueryContext<CreatedFileResult> {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        fileGenerator: GenerateFileFromTemplateExecutor,
        possibleName?: string,
        interactionMode?: InteractionModeEnum
    ): GenerateArgumentsFileArguments {
        return new GenerateArgumentsFileArguments(fileModel, yeomanGenerator, fileGenerator, possibleName, interactionMode);
    }

    constructor(
        public fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        public fileGenerator: GenerateFileFromTemplateExecutor,
        public possibleName?: string,
        public interactionMode?: InteractionModeEnum,
        public askForMembers?: boolean,
        public members: string[] = []
    ) {
        super(yeomanGenerator);

    }
}
