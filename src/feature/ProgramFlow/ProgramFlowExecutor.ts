import { PipelineRunner, IPipeline, MessageFilter, PipelineExecutor } from "solid-pipelines";
import { ProgramFlowArguments } from './ProgramFlowArguments'
import { ProgramFlowPipeline } from './ProgramFlowPipeline'

import { injectable, inject } from "inversify";
import "reflect-metadata";
import PROGRAM_FLOW from "./ServiceIdentifiers";
import SOLID_PIPELINES from "../../foundation/PipelinesExtensions/ServiceIdentifiers";

@injectable()
export class ProgramFlowExecutor extends PipelineExecutor {
    constructor(

        public runner: PipelineRunner,

        @inject(PROGRAM_FLOW.PIPELINE)
        public pipeline: IPipeline

    ) {
        super(pipeline, runner);
    }
}