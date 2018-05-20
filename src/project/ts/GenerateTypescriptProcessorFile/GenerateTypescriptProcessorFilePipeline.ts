import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateProcessorFilePipeline } from '../../../feature/GenerateProcessorFile/GenerateProcessorFilePipeline';
import { GenerateProcessorModel } from '../../../feature/GenerateProcessorFile/models/GenerateProcessorModel';
import GENERATE_PROCESSOR_FILE from '../../../feature/GenerateProcessorFile/ServiceIdentifiers';
import { multiInject } from 'inversify';

export class GenerateTypescriptProcessorFilePipeline extends GenerateProcessorFilePipeline {
    GenerateProcessor(): IProcessor[] {
        return [
            Processors.GenerateAbstractProcessorImportStatement.Instance,
            Processors.GenerateArgumentsImportStatement.Instance,
            ...super.GenerateProcessor()
        ];
    }
}