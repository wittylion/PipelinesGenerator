import { IPipeline, PipelineRunner } from "solid-pipelines";
import { ChooseProgramFlowArguments } from './ChooseProgramFlowArguments'
import { ChooseProgramFlowPipeline } from './ChooseProgramFlowPipeline'

import { injectable, inject } from "inversify";
import CHOOSE_PROGRAM_FLOW from "./ServiceIdentifiers";
import "reflect-metadata";
import SOLID_PIPELINES from "../../foundation/PipelinesExtensions/ServiceIdentifiers";

@injectable()
export class ChooseProgramFlowExecutor {

    constructor(

        public runner: PipelineRunner,
                
        @inject(CHOOSE_PROGRAM_FLOW.PIPELINE)
        public pipeline: IPipeline
    
    ) {
    }

    async execute(args: ChooseProgramFlowArguments) : Promise<string> {
        await this.runner.RunPipeline(this.pipeline, args);

        return args.GetResult();
    }
}