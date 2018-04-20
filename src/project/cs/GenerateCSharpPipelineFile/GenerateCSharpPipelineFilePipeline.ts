import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GeneratePipelineFilePipeline } from '../../../feature/GeneratePipelineFile/GeneratePipelineFilePipeline';

export class GenerateCSharpPipelineFilePipeline extends GeneratePipelineFilePipeline {
    public static readonly Instance = new GenerateCSharpPipelineFilePipeline();

    GetProcessorsBeforeFileGeneration(): IProcessor[] {
        return [
            ...super.GetProcessorsBeforeFileGeneration(),
            Processors.ProvideNamespace.Instance,
        ];
    }
}