import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/GenerateFileModel";
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";
import Generator = require("yeoman-generator");

export class GenerateProcessorFileArguments extends PipelineContext {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        possibleName?: string,
        possibleExtension?: string,
        interactionMode?: InteractionModeEnum
    ): GenerateProcessorFileArguments {
        return new GenerateProcessorFileArguments(fileModel, yeomanGenerator, possibleName, possibleExtension, interactionMode);
    }

    constructor(
        public fileModel: GenerateFileModel,
        public yeomanGenerator: Generator,
        public possibleName?: string,
        public possibleExtension?: string,
        public interactionMode?: InteractionModeEnum
    ) {
        super();

    }

    argumentsClassName: string;
    argumentsFileName: string;

    abstractProcessorClassName: string;
    abstractProcessorFileName: string;
}
