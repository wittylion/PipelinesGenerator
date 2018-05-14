import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { injectable, inject, multiInject } from "inversify";
import "reflect-metadata";
import PROGRAM_FLOW from "./ServiceIdentifiers";

@injectable()
export class ProgramFlowPipeline implements IPipeline {
    
    constructor(

        @multiInject(PROGRAM_FLOW.PROCESSOR)
        public processors: IProcessor[]

    ) {
    }

    GetProcessors(): IProcessor[] {
        return [
            ...this.OtherProcessors(),
            ...this.processors,

        ];
    }

    OtherProcessors(): IProcessor[] {
        return [];
    }
}