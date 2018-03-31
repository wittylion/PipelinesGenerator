import { PipelineRunner } from "solid-pipelines";
import { GenerateTypescriptPipelineArguments } from './GenerateTypescriptPipelineArguments'
import { GenerateTypescriptPipelinePipeline } from './GenerateTypescriptPipeline'

export class GenerateTypescriptPipelineExecutor {
    public static Instance: GenerateTypescriptPipelineExecutor = new GenerateTypescriptPipelineExecutor();

    execute(args: GenerateTypescriptPipelineArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateTypescriptPipelinePipeline.Instance, args);
    }
}