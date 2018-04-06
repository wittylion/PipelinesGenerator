import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { IModelsProvider } from "./IModelsProvider";

export class GenerateCommonPipelineFilesArguments extends PipelineContext {
    yeomanGenerator: Generator;

    extension: string;
    pipelineNameSpecifiedByUser: string;
    createSubfolderWithPipelineName: boolean;
    commonSubfolders: string[] = [];

    generatedArgumentsClassName: string;
    generatedArgumentsFileName: string;

    generatedMessagesClassName: string;
    generatedMessagesFileName: string;

    generatedProcessorClassName: string;
    generatedProcessorFileName: string;

    processorsNames: string[] = [];
    processorsFileNames: string[] = [];

    generatedPipelineClassName: string;
    generatedPipelineFileName: string;

    generatedExecutorClassName: string;
    generatedExecutorFileName: string;

    modelsProvider: IModelsProvider;
}
