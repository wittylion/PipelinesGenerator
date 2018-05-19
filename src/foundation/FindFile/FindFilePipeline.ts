import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import "reflect-metadata";
import { injectable } from 'inversify';

@injectable()
export class FindFilePipeline implements IPipeline {
    public static readonly Instance = new FindFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.CollectAllPossibleDirectories.Instance,
            Processors.FindFilesInCollectedDirectories.Instance,
        ];
    }
}