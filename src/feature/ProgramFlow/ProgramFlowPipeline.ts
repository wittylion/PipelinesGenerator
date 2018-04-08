import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class ProgramFlowPipeline implements IPipeline {
    public static readonly Instance = new ProgramFlowPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.CreateProcessor.Instance,
            ...this.OtherProcessors(),
            Processors.GenerateCommonFilesFlow.Instance,

        ];
    }

    OtherProcessors(): IProcessor[] {
        return [];
    }
}