import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateProcessorFilePipeline } from '../../../feature/GenerateProcessorFile/GenerateProcessorFilePipeline';

export class GenerateCSharpProcessorFile extends GenerateProcessorFilePipeline {
    public static readonly Instance = new GenerateCSharpProcessorFile();

    GetProcessorsBeforeFileGeneration(): IProcessor[] {
        return [
            ...super.GetProcessorsBeforeFileGeneration(),
            Processors.ProvideNamespace.Instance,
        ];
    }
}