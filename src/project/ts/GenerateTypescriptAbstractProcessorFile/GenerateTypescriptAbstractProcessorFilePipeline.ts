import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateAbstractProcessorFilePipeline } from '../../../feature/GenerateAbstractProcessorFile/GenerateAbstractProcessorFilePipeline';

export class GenerateTypescriptAbstractProcessorFilePipeline extends GenerateAbstractProcessorFilePipeline {
    public static readonly Instance = new GenerateTypescriptAbstractProcessorFilePipeline();

    GenerateProcessor(): IProcessor[] {
        return [
            Processors.GenerateArgumentsImportPath.Instance,
            ...super.GenerateProcessor()
        ];
    }
}