import { PipelineRunner } from "solid-pipelines";
import { GenerateTypescriptArguments } from './GenerateTypescriptArguments'
import { GenerateTypescriptArgumentsPipeline } from './GenerateTypescriptArgumentsPipeline'

export class GenerateTypescriptArgumentsExecutor {
    public static Instance: GenerateTypescriptArgumentsExecutor = new GenerateTypescriptArgumentsExecutor();

    execute(args: GenerateTypescriptArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateTypescriptArgumentsPipeline.Instance, args);
    }
}