import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GeneratePipelineFilePipeline implements IPipeline {
    public static readonly Instance = new GeneratePipelineFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            ...this.GetProcessorsBeforeFileGeneration(),
            Processors.GeneratePipelineFile.Instance,
        ];
    }

    GetProcessorsBeforeFileGeneration() : IProcessor[] {
        return [
            Processors.TrySetClassNameToFileName.Instance,
            Processors.TrySetFileNameToClassName.Instance,
            Processors.CheckFileName.Instance,
            Processors.CheckClassName.Instance,
            Processors.CheckProcessors.Instance
        ];
    }
}