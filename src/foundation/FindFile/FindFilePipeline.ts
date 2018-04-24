import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class FindFilePipeline implements IPipeline {
    public static readonly Instance = new FindFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.CollectAllPossibleDirectories.Instance,
            Processors.FindFilesInCollectedDirectories.Instance,
        ];
    }
}