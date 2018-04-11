import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateTypescriptPathPipeline implements IPipeline {
    public static readonly Instance = new GenerateTypescriptPathPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsureFromPath.Instance,
            Processors.EnsureToPath.Instance,
            Processors.FindRelative.Instance,
            Processors.JoinWithCurrentDirectorySpecifier.Instance,
            Processors.TrimExtension.Instance,
        
        ];
    }
}