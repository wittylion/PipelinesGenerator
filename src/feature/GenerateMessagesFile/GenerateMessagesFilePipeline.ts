import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateMessagesFilePipeline implements IPipeline {
    public static readonly Instance = new GenerateMessagesFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsureFileModel.Instance,
            Processors.GenerateMessagesFile.Instance,
        
        ];
    }
}