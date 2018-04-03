import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from './GenerateFileModel'
import Generator = require("yeoman-generator");
import { IModelsProvider } from "./IModelsProvider";

export class GenerateCommonPipelineFilesArguments extends PipelineContext {
    yeomanGenerator: Generator;

    extension: string;
    pipelineNameSpecifiedByUser: string;
    createSubfolderWithPipelineName: boolean;

    commonSubdirectoryCaseTuner: (subdirectory: string) => string;
    commonSubfolders: string[] = [];

    argumentsModel: GenerateFileModel;
    abstractProcessorModel: GenerateFileModel;
    processorsModels: GenerateFileModel[] = [];
    processorsExportsModel: GenerateFileModel;
    pipelineModel: GenerateFileModel;
    executorModel: GenerateFileModel;
    mainExportsModel: GenerateFileModel;

    modelsProvider: IModelsProvider;
}
