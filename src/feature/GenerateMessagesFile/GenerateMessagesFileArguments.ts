import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";

export class GenerateMessagesFileArguments extends PipelineContext {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        possibleName?: string,
        possibleExtension?: string,
        argumentsClassName?: string,
        argumentsFileName?: string,
        interactionMode?: InteractionModeEnum
    ): GenerateMessagesFileArguments {
        return new GenerateMessagesFileArguments(
            fileModel,
            yeomanGenerator,
            possibleName,
            possibleExtension,
            argumentsClassName,
            argumentsFileName,
            interactionMode);
    }

    constructor(
        public fileModel: GenerateFileModel,
        public yeomanGenerator: Generator,
        public possibleName?: string,
        public possibleExtension?: string,
        public argumentsClassName?: string,
        public argumentsFileName?: string,
        public interactionMode?: InteractionModeEnum) {
        super();

    }
}
