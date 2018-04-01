import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateTypescriptPipeline implements IPipeline {
    public static readonly Instance = new GenerateTypescriptPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsurePipelineFileName.Instance,
            Processors.EnsureTemplateFileName.Instance,
            Processors.ExecuteGenerator.Instance,

        ];
    }
}