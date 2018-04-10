import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateArgumentsFilePipeline } from '../../../feature/GenerateArgumentsFile/GenerateArgumentsFilePipeline';

export class GenerateTypescriptArgumentsFilePipeline extends GenerateArgumentsFilePipeline {
    public static readonly Instance = new GenerateTypescriptArgumentsFilePipeline();

    GetProcessors(): IProcessor[] {
        return [
            ...super.GetProcessors(),
            Processors.UpdateExportsFile.Instance,
        
        ];
    }
}