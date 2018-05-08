import { PipelineRunner, IPipeline, MessageFilter } from "solid-pipelines";
import { ProgramFlowArguments } from './ProgramFlowArguments'
import { ProgramFlowPipeline } from './ProgramFlowPipeline'

import { injectable, inject } from "inversify";
import "reflect-metadata";
import PROGRAM_FLOW from "./ServiceIdentifiers";

@injectable()
export class ProgramFlowExecutor {
    constructor(
        
        @inject(PROGRAM_FLOW.PIPELINE)
        public pipeline: IPipeline
        
    ) {

    }

    async execute(args: ProgramFlowArguments): Promise<{ message: string }> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {
            message: args
                .GetMessages(MessageFilter.All)
                .map(message => message.Message)
                .join('\n')
        };
    }
}