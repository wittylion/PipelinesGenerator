import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateExecutorFilePipeline } from '../../../feature/GenerateExecutorFile/GenerateExecutorFilePipeline';

export class GenerateTypescriptExecutorFilePipeline extends GenerateExecutorFilePipeline {
    public static readonly Instance = new GenerateTypescriptExecutorFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            ...super.GetProcessors(),
            Processors.AddExportDeclaration.Instance,
        ];
    }
}