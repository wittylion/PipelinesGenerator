import { IPipeline, PipelineRunner, PipelineExecutor } from "solid-pipelines";
import { GenerateProcessorFromScratchArguments } from './GenerateProcessorFromScratchArguments'
import { GenerateProcessorFromScratchPipeline } from './GenerateProcessorFromScratchPipeline'
import GENERATE_PROCESSOR_FROM_SCRATCH from "./ServiceIdentifiers";
import { inject, injectable } from "inversify";
import SOLID_PIPELINES from "../../foundation/PipelinesExtensions/ServiceIdentifiers";
import "reflect-metadata";

@injectable()
export class GenerateProcessorFromScratchExecutor
    extends PipelineExecutor {

    constructor(
        @inject(GENERATE_PROCESSOR_FROM_SCRATCH.PIPELINE)
        public pipeline: IPipeline,

        public runner: PipelineRunner,
    ) {
        super(pipeline, runner);
    }
}