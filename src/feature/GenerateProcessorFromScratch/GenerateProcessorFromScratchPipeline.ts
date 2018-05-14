import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import "reflect-metadata";
import { injectable, multiInject } from 'inversify';
import GENERATE_PROCESSOR_FROM_SCRATCH from './ServiceIdentifiers';

@injectable()
export class GenerateProcessorFromScratchPipeline implements IPipeline {

    constructor(
        @multiInject(GENERATE_PROCESSOR_FROM_SCRATCH.PROCESSOR)
        private processors: IProcessor[]
    ) {

    }

    GetProcessors(): IProcessor[] {
        return this.processors;
    }
}