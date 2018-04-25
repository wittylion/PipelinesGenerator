import { IPipeline, PipelineRunner } from "solid-pipelines";
import { GenerateProcessorFromScratchArguments } from './GenerateProcessorFromScratchArguments'
import { GenerateProcessorFromScratchPipeline } from './GenerateProcessorFromScratchPipeline'

export class GenerateProcessorFromScratchExecutor {
    public static Instance: GenerateProcessorFromScratchExecutor = new GenerateProcessorFromScratchExecutor(GenerateProcessorFromScratchPipeline.Instance);

    constructor(public pipeline: IPipeline) {
    }

    execute(args: GenerateProcessorFromScratchArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(this.pipeline, args);
    }
}