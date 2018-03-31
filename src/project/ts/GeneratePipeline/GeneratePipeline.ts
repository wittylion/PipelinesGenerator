import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GeneratePipelinePipeline implements IPipeline {
    public static readonly Instance = new GeneratePipelinePipeline();

    GetProcessors(): IProcessor[] {
        return [  
            Processors.ValidateGenerator.Instance,
            Processors.EnsureTemplateDestination.Instance,
            Processors.ValidateTemplateDestination.Instance,
            Processors.EnsurePipelineSuffixInFileName.Instance,
            Processors.EnsurePipelineSuffixInClassName.Instance,
            Processors.EnsureSubdirectoryName.Instance,
            Processors.EnsurePipelineDestination.Instance,
            Processors.FillCreationOptions.Instance,
            Processors.CreatePipelineFileFromTemplate.Instance,
        
        ];
    }
}