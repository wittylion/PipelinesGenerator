import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateTypescriptArgumentsPipeline implements IPipeline {
    public static readonly Instance = new GenerateTypescriptArgumentsPipeline();

    GetProcessors(): IProcessor[] {
        return [  
            Processors.EnsureArgumentsFileName.Instance,
            Processors.EnsureTemplateFileName.Instance,
            Processors.ExecuteGenerator.Instance,
        
        ];
    }
}