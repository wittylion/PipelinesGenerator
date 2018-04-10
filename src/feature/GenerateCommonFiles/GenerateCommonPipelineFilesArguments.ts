import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { IModelsProvider } from "./IModelsProvider";
import { GenerateProcessorFileExecutor } from "../GenerateProcessorFile";

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
    processorGenerator: GenerateProcessorFileExecutor = GenerateProcessorFileExecutor.Instance;

    generatedPipelineClassName: string;
    generatedPipelineFileName: string;

    generatedExecutorClassName: string;
    generatedExecutorFileName: string;

    modelsProvider: IModelsProvider;
}
