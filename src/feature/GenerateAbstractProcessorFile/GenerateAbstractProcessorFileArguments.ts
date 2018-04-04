import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/GenerateFileModel";
import Generator = require("yeoman-generator");
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";

export class GenerateAbstractProcessorFileArguments extends PipelineContext {
    public static Create(
        fileModel: GenerateFileModel,
        yeomanGenerator: Generator,
        possibleName?: string,
        possibleExtension?: string,
        argumentsClassName?: string,
        argumentsFileName?: string,
        interactionMode?: InteractionModeEnum
    ): GenerateAbstractProcessorFileArguments {
        return new GenerateAbstractProcessorFileArguments(
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
