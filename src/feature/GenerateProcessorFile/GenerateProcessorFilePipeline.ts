import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateProcessorFilePipeline implements IPipeline {
    public static readonly Instance = new GenerateProcessorFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.CheckClassName.Instance,
            Processors.CheckFileName.Instance,
            Processors.CheckArguments.Instance,
            Processors.CheckAbstractProcessor.Instance,
            Processors.GenerateArgumentsImportStatement.Instance,
            Processors.GenerateAbstractProcessorImportStatement.Instance,
            Processors.GenerateProcessorFile.Instance,
        
        ];
    }
}