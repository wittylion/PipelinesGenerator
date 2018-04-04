import { PipelineContext } from "solid-pipelines";
import { InteractionModeEnum } from './InteractionModeEnum'
import { GenerateFileModel } from "../GenerateFileFromTemplate/GenerateFileModel";
import Generator = require("yeoman-generator");

export class EnsureFileModelArguments extends PipelineContext {
    public static Create(
        yeomanGenerator: Generator,
        model?: GenerateFileModel,
        possibleName?: string,
        possibleExtension?: string,
        interactionMode?: InteractionModeEnum
    ): EnsureFileModelArguments {
        return new EnsureFileModelArguments(
            yeomanGenerator,
            model,
            possibleName,
            possibleExtension,
            interactionMode
        );
    }

    public constructor(
        yeomanGenerator: Generator,
        model?: GenerateFileModel,
        possibleName?: string,
        possibleExtension?: string,
        interactionMode?: InteractionModeEnum
    ) {
        super();
        this.yeomanGenerator = yeomanGenerator;
        this.interactionMode = interactionMode;
        this.possibleName = possibleName;
        this.possibleExtension = possibleExtension;
        this.fileModel = !model ? new GenerateFileModel() : model;
    }

    interactionMode: InteractionModeEnum;
    yeomanGenerator: Generator;
    possibleName: string;
    possibleExtension: string;

    fileModel: GenerateFileModel;
}
