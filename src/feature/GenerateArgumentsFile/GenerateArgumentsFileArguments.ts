import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/GenerateFileModel";
import Generator = require("yeoman-generator");
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";

export class GenerateArgumentsFileArguments extends PipelineContext {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        possibleName?: string,
        possibleExtension?: string,
        interactionMode?: InteractionModeEnum
    ): GenerateArgumentsFileArguments {
        return new GenerateArgumentsFileArguments(fileModel, yeomanGenerator, possibleName, possibleExtension, interactionMode);
    }

    constructor(
        public fileModel: GenerateFileModel,
        public yeomanGenerator: Generator,
        public possibleName?: string,
        public possibleExtension?: string,
        public interactionMode?: InteractionModeEnum,
        public askForMembers?: boolean,
        public members: string[] = []
    ) {
        super();

    }
}
