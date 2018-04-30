import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateProcessorModel } from './models/GenerateProcessorModel';

export class GenerateProcessorFilePipeline implements IPipeline {
    constructor(public fileGenerator: (processor: GenerateProcessorModel) => Promise<void>) {
    }

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
            new Processors.GenerateProcessorFile(this.fileGenerator)
        ];
    }
}