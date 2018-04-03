import { PipelineRunner } from "solid-pipelines";
import { EnsureFileModelArguments } from './EnsureFileModelArguments'
import { EnsureFileModelPipeline } from './EnsureFileModelPipeline'

export class EnsureFileModelExecutor {
    public static Instance: EnsureFileModelExecutor = new EnsureFileModelExecutor();

    execute(args: EnsureFileModelArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(EnsureFileModelPipeline.Instance, args);
    }
}