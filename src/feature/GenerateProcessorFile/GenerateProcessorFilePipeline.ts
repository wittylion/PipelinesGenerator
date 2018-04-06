import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateProcessorFilePipeline implements IPipeline {
    public static readonly Instance = new GenerateProcessorFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsureFileModel.Instance,
            Processors.GenerateProcessorFile.Instance,
        
        ];
    }
}