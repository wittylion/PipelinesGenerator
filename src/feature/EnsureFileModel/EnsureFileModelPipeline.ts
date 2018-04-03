import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class EnsureFileModelPipeline implements IPipeline {
    public static readonly Instance = new EnsureFileModelPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.SetDefaultModeToMinimum.Instance,
            Processors.EnsureClassNameIsSet.Instance,
            Processors.EnsureFileNameIsSet.Instance,
            Processors.EnsureExtensionIsSet.Instance,
            Processors.EnsureTemplateIsSet.Instance,
            Processors.EnsureSubdirectoriesAreSet.Instance,

        ];
    }
}