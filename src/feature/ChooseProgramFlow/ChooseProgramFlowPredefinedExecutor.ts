import { IPipeline, PipelineRunner } from "solid-pipelines";
import { ChooseProgramFlowArguments } from './ChooseProgramFlowArguments'

import "reflect-metadata";
import { injectable, inject } from "inversify";
import CHOOSE_PROGRAM_FLOW from "./ServiceIdentifiers";
import { ChooseProgramFlowExecutor } from ".";

@injectable()
export class ChooseProgramFlowPredefinedExecutor {
    constructor(
        
        @inject(CHOOSE_PROGRAM_FLOW.EXECUTOR)
        public executor: ChooseProgramFlowExecutor,
        
        @inject(CHOOSE_PROGRAM_FLOW.ARGUMENTS)
        public args: ChooseProgramFlowArguments,
    
    ) {
    }

    async executeQuery<T>(extractor: (queryArguments: ChooseProgramFlowArguments) => T): Promise<T> {
        await this.execute();
        return extractor(this.args);
    }

    async execute() : Promise<void> {
        await this.executor.execute(this.args);
    }
}