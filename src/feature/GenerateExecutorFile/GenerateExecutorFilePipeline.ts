import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateExecutorFilePipeline implements IPipeline {
    public static readonly Instance = new GenerateExecutorFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsureModel.Instance,
            Processors.GenerateFile.Instance,
        
        ];
    }
}