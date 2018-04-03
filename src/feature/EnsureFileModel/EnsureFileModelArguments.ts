import { PipelineContext } from "solid-pipelines";
import { InteractionModeEnum } from './InteractionModeEnum'
import { GenerateFileModel } from "../GenerateCommonFiles/GenerateFileModel";
import Generator = require("yeoman-generator");

export class EnsureFileModelArguments extends PipelineContext {
    public static Create(
        yeomanGenerator: Generator,
        possibleName?: string,
        possibleExtension?: string,
        interactionMode?: InteractionModeEnum
    ): EnsureFileModelArguments {
        return new EnsureFileModelArguments(
            yeomanGenerator,
            possibleName,
            possibleExtension,
            interactionMode
        );
    }

    public constructor(
        yeomanGenerator: Generator,
        possibleName?: string,
        possibleExtension?: string,
        interactionMode?: InteractionModeEnum
    ) {
        super();
        this.yeomanGenerator = yeomanGenerator;
        this.interactionMode = interactionMode;
        this.possibleName = possibleName;
        this.possibleExtension = possibleExtension;
    }

    interactionMode: InteractionModeEnum;
    yeomanGenerator: Generator;
    possibleName: string;
    possibleExtension: string;

    fileModel: GenerateFileModel = new GenerateFileModel();
}
