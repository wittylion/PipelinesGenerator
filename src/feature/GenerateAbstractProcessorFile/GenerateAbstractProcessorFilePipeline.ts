import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateAbstractProcessorFilePipeline implements IPipeline {
    public static readonly Instance = new GenerateAbstractProcessorFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsureArgumentsFileName.Instance,
            Processors.EnsureFileModel.Instance,
            Processors.GenerateAbstractProcessorFile.Instance,
        
        ];
    }
}