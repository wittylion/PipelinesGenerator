import { GenerateArgumentsFileExecutor } from "../../GenerateArgumentsFile";
import { GenerateAbstractProcessorFileExecutor } from "../../GenerateAbstractProcessorFile";
import { GenerateProcessorFileExecutor } from "../../GenerateProcessorFile";
import { GenerateExecutorFileExecutor } from "../../GenerateExecutorFile";
import { GenerateCommonPipelineFilesExecutor } from "..";

export interface IGeneratorsProvider {
    getArgumentsGenerator(): GenerateArgumentsFileExecutor;
    getAbstractProcessorGenerator(): GenerateAbstractProcessorFileExecutor;
    getProcessorGenerator(): GenerateProcessorFileExecutor;
    getExecutorGenerator(): GenerateExecutorFileExecutor;
    getCommonFilesGenerator(): GenerateCommonPipelineFilesExecutor;
}