import { GenerateArgumentsFileExecutor } from "../../GenerateArgumentsFile";
import { GenerateAbstractProcessorFileExecutor } from "../../GenerateAbstractProcessorFile";
import { GenerateProcessorFileExecutor } from "../../GenerateProcessorFile";
import { GenerateExecutorFileExecutor } from "../../GenerateExecutorFile";
import { GenerateCommonPipelineFilesExecutor } from "..";
import { GeneratePipelineFileExecutor } from "../../GeneratePipelineFile";
import { GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";

export interface IGeneratorsProvider {
    getAbstractProcessorGenerator(): GenerateAbstractProcessorFileExecutor;
    getPipelineGenerator(): GeneratePipelineFileExecutor;
    getFileFromTemplateGenerator(): GenerateFileFromTemplateExecutor;
}