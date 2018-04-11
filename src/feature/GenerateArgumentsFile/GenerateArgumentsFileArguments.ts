import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import Generator = require("yeoman-generator");
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";
import { GenerateArgumentsResult } from "./models/GenerateArgumentsResult";

export class GenerateArgumentsFileArguments extends PipelineContext {
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
        public yeomanGenerator: Generator,
        public possibleName?: string,
        public interactionMode?: InteractionModeEnum,
        public askForMembers?: boolean,
        public members: string[] = []
    ) {
        super();

    }

    result: GenerateArgumentsResult;
}
