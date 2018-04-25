import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class ChooseProgramFlowPipeline implements IPipeline {
    public static readonly Instance = new ChooseProgramFlowPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.AddAvailableOptions.Instance,
            Processors.AskUserToChooseAvailableOptions.Instance,
        
        ];
    }
}