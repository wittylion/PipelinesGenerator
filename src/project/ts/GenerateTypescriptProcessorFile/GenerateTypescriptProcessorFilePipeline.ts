import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateProcessorFilePipeline } from '../../../feature/GenerateProcessorFile/GenerateProcessorFilePipeline';
import { GenerateProcessorModel } from '../../../feature/GenerateProcessorFile/models/GenerateProcessorModel';

export class GenerateTypescriptProcessorFilePipeline extends GenerateProcessorFilePipeline {
    constructor(
        public fileGenerator: (processor: GenerateProcessorModel) => Promise<void>,
        public exportAllFiles: (processorModel: GenerateProcessorModel) => Promise<void>
    ) {
        super(fileGenerator);
    }
    GenerateProcessor(): IProcessor[] {
        return [
            Processors.GenerateAbstractProcessorImportStatement.Instance,
            Processors.GenerateArgumentsImportStatement.Instance,
            ...super.GenerateProcessor(),
            new Processors.UpdateExportsFile(this.exportAllFiles)
        ];
    }
}