import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateProcessorFilePipeline } from '../../../feature/GenerateProcessorFile/GenerateProcessorFilePipeline';

export class GenerateCSharpProcessorFile extends GenerateProcessorFilePipeline {
    GetProcessorsBeforeFileGeneration(): IProcessor[] {
        return [
            ...super.GetProcessorsBeforeFileGeneration(),
            Processors.ProvideNamespace.Instance,
        ];
    }
}