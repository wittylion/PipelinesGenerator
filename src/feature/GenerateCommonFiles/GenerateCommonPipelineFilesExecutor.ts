import { PipelineRunner } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments } from './GenerateCommonPipelineFilesArguments'
import { GenerateCommonPipelineFilesPipeline } from './GenerateCommonPipelineFilesPipeline'

export class GenerateCommonPipelineFilesExecutor {
    public static Instance: GenerateCommonPipelineFilesExecutor = new GenerateCommonPipelineFilesExecutor();

    execute(args: GenerateCommonPipelineFilesArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateCommonPipelineFilesPipeline.Instance, args);
    }
}