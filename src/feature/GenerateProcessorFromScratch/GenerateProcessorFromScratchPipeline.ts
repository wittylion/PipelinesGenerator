import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateProcessorFromScratchPipeline implements IPipeline {
    public static readonly Instance = new GenerateProcessorFromScratchPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsureYeomanGeneratorIsSet.Instance,
            Processors.EnsureDefaultModelIsSet.Instance,
            Processors.TryToGuessProcessorName.Instance,
            Processors.AskForProcessorName.Instance,
            Processors.EnsureArgumentsData.Instance,
            Processors.EnsureAbstractProcessorData.Instance,
            Processors.GenerateProcessor.Instance,
        
        ];
    }
}