import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateAbstractProcessorPipeline implements IPipeline {
    public static readonly Instance = new GenerateAbstractProcessorPipeline();

    GetProcessors(): IProcessor[] {
        return [  
            Processors.EnsureFileName.Instance,
            Processors.EnsureTemplateFileName.Instance,
            Processors.ExecuteGenerator.Instance,
        
        ];
    }
}