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

    generatedArgumentsClassName: string;
    generatedArgumentsFileName: string;

    generatedProcessorClassName: string;
    generatedProcessorFileName: string;

    processorsNames: string[] = [];

    generatedPipelineClassName: string;
    generatedPipelineFileName: string;

    generatedExecutorClassName: string;
    generatedExecutorFileName: string;

    modelsProvider: IModelsProvider;
}
