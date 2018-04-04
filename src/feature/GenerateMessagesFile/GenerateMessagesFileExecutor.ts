import { PipelineRunner } from "solid-pipelines";
import { GenerateMessagesFileArguments } from './GenerateMessagesFileArguments'
import { GenerateMessagesFilePipeline } from './GenerateMessagesFilePipeline'

export class GenerateMessagesFileExecutor {
    public static Instance: GenerateMessagesFileExecutor = new GenerateMessagesFileExecutor();

    execute(args: GenerateMessagesFileArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateMessagesFilePipeline.Instance, args);
    }
}