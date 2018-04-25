import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class ChooseProjectPipeline implements IPipeline {
    public static readonly Instance = new ChooseProjectPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.ComposeListOfAvailableProjects.Instance,
            Processors.AskUserToSelectProject.Instance,
        
        ];
    }
}