import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateProcessorFilePipeline implements IPipeline {
    public static readonly Instance = new GenerateProcessorFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            ...this.GetProcessorsBeforeFileGeneration(),
            ...this.GenerateProcessor()

        ];
    }

    GetProcessorsBeforeFileGeneration(): IProcessor[] {
        return [
            Processors.TrySetClassNameToFileNameIfMissing.Instance,
            Processors.TrySetFileNameToClassNameIfMissing.Instance,
            Processors.CheckClassName.Instance,
            Processors.CheckFileName.Instance,
            Processors.CheckArguments.Instance,
            Processors.CheckAbstractProcessor.Instance,
        ];
    }

    GenerateProcessor(): IProcessor[] {
        return [
            Processors.GenerateProcessorFile.Instance
        ];
    }
}