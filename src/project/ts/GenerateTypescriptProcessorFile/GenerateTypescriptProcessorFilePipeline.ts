import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateProcessorFilePipeline } from '../../../feature/GenerateProcessorFile/GenerateProcessorFilePipeline';

export class GenerateTypescriptProcessorFilePipeline extends GenerateProcessorFilePipeline {
    public static readonly Instance = new GenerateTypescriptProcessorFilePipeline();

    GetProcessors(): IProcessor[] {
        return [...super.GetProcessors(), Processors.UpdateExportsFile.Instance];
    }
}