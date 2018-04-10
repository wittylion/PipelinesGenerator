import { IPipeline, PipelineRunner } from "solid-pipelines";
import { GenerateExecutorFileArguments } from './GenerateExecutorFileArguments'
import { GenerateExecutorFilePipeline } from './GenerateExecutorFilePipeline'

export class GenerateExecutorFileExecutor {
    public static Instance: GenerateExecutorFileExecutor = new GenerateExecutorFileExecutor(GenerateExecutorFilePipeline.Instance);

    constructor(public pipeline: IPipeline) {
    }

    execute(args: GenerateExecutorFileArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(this.pipeline, args);
    }
}