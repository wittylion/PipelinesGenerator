import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class ObtainOptionPipeline implements IPipeline {
    public static readonly Instance = new ObtainOptionPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.ValidateYeomanGenerator.Instance,
            Processors.TryGetFromArguments.Instance,
            Processors.TryGetFromOptions.Instance,
            Processors.TryGetFromStorage.Instance,
        
        ];
    }
}