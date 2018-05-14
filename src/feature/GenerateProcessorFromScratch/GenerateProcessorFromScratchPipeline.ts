import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import "reflect-metadata";
import { injectable } from 'inversify';

@injectable()
export class GenerateProcessorFromScratchPipeline implements IPipeline {

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