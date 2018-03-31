import { PipelineRunner } from "solid-pipelines";
import { GeneratePipelineArguments } from './GeneratePipelineArguments'
import { GeneratePipelinePipeline } from './GeneratePipelinePipeline'

export class GeneratePipelineExecutor {
    public static Instance: GeneratePipelineExecutor = new GeneratePipelineExecutor();

    execute(args: GeneratePipelineArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GeneratePipelinePipeline.Instance, args);
    }
}