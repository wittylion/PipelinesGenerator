import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import Generator = require("yeoman-generator");
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateArgumentsFileArguments extends YeomanQueryContext<CreatedFileResult> {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        possibleName?: string,
        interactionMode?: InteractionModeEnum
    ): GenerateArgumentsFileArguments {
        return new GenerateArgumentsFileArguments(fileModel, yeomanGenerator, possibleName, interactionMode);
    }

    constructor(
        public fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        public possibleName?: string,
        public interactionMode?: InteractionModeEnum,
        public askForMembers?: boolean,
        public members: string[] = []
    ) {
        super(yeomanGenerator);

    }
}
