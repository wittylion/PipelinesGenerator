import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateArgumentsFilePipeline implements IPipeline {
    public static readonly Instance = new GenerateArgumentsFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsureMembers.Instance,
            Processors.EnsureFileModel.Instance,
            Processors.GenerateArgumentsFile.Instance,
        
        ];
    }
}