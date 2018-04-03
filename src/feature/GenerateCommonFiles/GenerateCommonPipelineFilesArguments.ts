import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from './GenerateFileModel'
import Generator = require("yeoman-generator");

export class GenerateCommonPipelineFilesArguments extends PipelineContext {
    yeomanGenerator: Generator;

    extension: string;
    pipelineNameSpecifiedByUser: string;
    createSubfolderWithPipelineName: boolean = false;

    commonSubdirectoryCaseTuner: (subdirectory: string) => string;
    commonSubfolders: string[] = [];

    argumentsModel: GenerateFileModel;
    abstractProcessorModel: GenerateFileModel;
    processorsModels: GenerateFileModel[] = [];
    processorsExportsModel: GenerateFileModel;
    pipelineModel: GenerateFileModel;
    executorModel: GenerateFileModel;
    mainExportsModel: GenerateFileModel;    
}
