import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateProcessorFilePipeline } from '../../../feature/GenerateProcessorFile/GenerateProcessorFilePipeline';

export class GenerateTypescriptProcessorFilePipeline extends GenerateProcessorFilePipeline {
    public static readonly Instance = new GenerateTypescriptProcessorFilePipeline();

    GenerateProcessor(): IProcessor[] {
        return [
            Processors.GenerateAbstractProcessorImportStatement.Instance,
            Processors.GenerateArgumentsImportStatement.Instance,
            ...super.GenerateProcessor(),
            Processors.UpdateExportsFile.Instance
        ];
    }
}