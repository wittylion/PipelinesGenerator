import { PipelineRunner, IPipeline, MessageFilter } from "solid-pipelines";
import { ProgramFlowArguments } from './ProgramFlowArguments'
import { ProgramFlowPipeline } from './ProgramFlowPipeline'

import { injectable, inject } from "inversify";
import "reflect-metadata";
import PROGRAM_FLOW from "./ServiceIdentifiers";
import SOLID_PIPELINES from "../../foundation/PipelinesExtensions/ServiceIdentifiers";

@injectable()
export class ProgramFlowExecutor {
    constructor(

        public runner: PipelineRunner,
        
        @inject(PROGRAM_FLOW.PIPELINE)
        public pipeline: IPipeline
        
    ) {

    }

    async execute(args: ProgramFlowArguments): Promise<{ message: string }> {
        await this.runner.RunPipeline(this.pipeline, args);

        return {
            message: args
                .GetAllMessages()
                .map(message => message.Message)
                .join('\n')
        };
    }
}