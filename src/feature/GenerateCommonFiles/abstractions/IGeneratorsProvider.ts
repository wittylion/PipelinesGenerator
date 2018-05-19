import { GenerateArgumentsFileExecutor } from "../../GenerateArgumentsFile";
import { GenerateAbstractProcessorFileExecutor } from "../../GenerateAbstractProcessorFile";
import { GenerateProcessorFileExecutor } from "../../GenerateProcessorFile";
import { GenerateExecutorFileExecutor } from "../../GenerateExecutorFile";
import { GenerateCommonPipelineFilesExecutor } from "..";
import { GeneratePipelineFileExecutor } from "../../GeneratePipelineFile";
import { GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";

export interface IGeneratorsProvider {
    getArgumentsGenerator(): GenerateArgumentsFileExecutor;
    getAbstractProcessorGenerator(): GenerateAbstractProcessorFileExecutor;
    getProcessorGenerator(): GenerateProcessorFileExecutor;
    getExecutorGenerator(): GenerateExecutorFileExecutor;
    getPipelineGenerator(): GeneratePipelineFileExecutor;
    getFileFromTemplateGenerator(): GenerateFileFromTemplateExecutor;
}