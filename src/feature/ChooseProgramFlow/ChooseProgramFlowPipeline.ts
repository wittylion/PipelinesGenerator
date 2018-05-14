import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { injectable, multiInject } from 'inversify';
import "reflect-metadata";
import CHOOSE_PROGRAM_FLOW from './ServiceIdentifiers';

@injectable()
export class ChooseProgramFlowPipeline implements IPipeline {
    
    constructor(
        @multiInject(CHOOSE_PROGRAM_FLOW.PROCESSOR)
        private processors: IProcessor[]
    ) {

    }

    GetProcessors(): IProcessor[] {
        return this.processors;
    }
}