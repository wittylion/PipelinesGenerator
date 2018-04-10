import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { IModelsProvider } from "./IModelsProvider";
import { GenerateProcessorFileExecutor } from "../GenerateProcessorFile";
import { GenerateExecutorFileExecutor } from "../GenerateExecutorFile";
import { IGeneratorsProvider } from "./abstractions/IGeneratorsProvider";
import { DefaultGeneratorsProvider } from "./DefaultGeneratorsProvider";

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
    generatorsProvider: IGeneratorsProvider = DefaultGeneratorsProvider.Instance;
}
