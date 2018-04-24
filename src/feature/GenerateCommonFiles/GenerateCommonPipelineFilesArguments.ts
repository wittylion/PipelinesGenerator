import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { IModelsProvider } from "./IModelsProvider";
import { GenerateProcessorFileExecutor } from "../GenerateProcessorFile";
import { GenerateExecutorFileExecutor } from "../GenerateExecutorFile";
import { IGeneratorsProvider } from "./abstractions/IGeneratorsProvider";
import { DefaultGeneratorsProvider } from "./DefaultGeneratorsProvider";
import { YeomanContext } from "../../foundation/PipelinesExtensions";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateCommonPipelineFilesArguments extends YeomanContext {
    pipelineNameSpecifiedByUser: string;
    processorNamesSpecifiedByUser: string[] = [];
    createSubfolderWithPipelineName: boolean;
    commonSubfolders: string[] = [];

    generatedArguments: CreatedFileResult;
    generatedMessages: CreatedFileResult;
    generatedProcessor: CreatedFileResult;
    generatedProcessors: CreatedFileResult[] = [];
    generatedPipeline: CreatedFileResult;
    generatedExecutor: CreatedFileResult;
    
    modelsProvider: IModelsProvider;
    generatorsProvider: IGeneratorsProvider = DefaultGeneratorsProvider.Instance;
}
