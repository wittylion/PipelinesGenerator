import { IPipeline, PipelineRunner } from "solid-pipelines";
import { ChooseProgramFlowArguments } from './ChooseProgramFlowArguments'
import { ChooseProgramFlowPipeline } from './ChooseProgramFlowPipeline'

import { injectable, inject } from "inversify";
import CHOOSE_PROGRAM_FLOW from "./ServiceIdentifiers";
import "reflect-metadata";

@injectable()
export class ChooseProgramFlowExecutor {
    public static Instance: ChooseProgramFlowExecutor = new ChooseProgramFlowExecutor(ChooseProgramFlowPipeline.Instance);

    constructor(
        
        @inject(CHOOSE_PROGRAM_FLOW.PIPELINE)
        public pipeline: IPipeline
    
    ) {
    }

    async execute(args: ChooseProgramFlowArguments) : Promise<string> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return args.GetResult();
    }
}