import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateCommonPipelineFilesPipeline implements IPipeline {
    public static readonly Instance = new GenerateCommonPipelineFilesPipeline();

    GetProcessors(): IProcessor[] {
        return [  
            Processors.ValidateYeomanGenerator.Instance,
            Processors.TryToGetPipelineName.Instance,
            Processors.TryToGetProcessors.Instance,
            Processors.AskForSubfolderCreation.Instance,
            Processors.ValidatePipelineName.Instance,
            Processors.EnsureExtensionIsSet.Instance,
            Processors.EnsureCommonSubfolders.Instance,
            Processors.GenerateArguments.Instance,
            Processors.GenerateAbstractProcessor.Instance,
            Processors.GenerateProcessors.Instance,
            Processors.GenerateProcessorsExports.Instance,
            Processors.GeneratePipeline.Instance,
            Processors.GenerateExecutor.Instance,
            Processors.GenerateMainExports.Instance
        ];
    }
}