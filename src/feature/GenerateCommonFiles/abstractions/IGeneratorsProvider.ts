import { GenerateArgumentsFileExecutor } from "../../GenerateArgumentsFile";
import { GenerateAbstractProcessorFileExecutor } from "../../GenerateAbstractProcessorFile";
import { GenerateProcessorFileExecutor } from "../../GenerateProcessorFile";
import { GenerateExecutorFileExecutor } from "../../GenerateExecutorFile";

export interface IGeneratorsProvider {
    getArgumentsGenerator(): GenerateArgumentsFileExecutor;
    getAbstractProcessorGenerator(): GenerateAbstractProcessorFileExecutor;
    getProcessorGenerator(): GenerateProcessorFileExecutor;
    getExecutorGenerator(): GenerateExecutorFileExecutor;
}