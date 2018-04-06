import { PipelineRunner } from "solid-pipelines";
import { GenerateProcessorFileArguments } from './GenerateProcessorFileArguments'
import { GenerateProcessorFilePipeline } from './GenerateProcessorFilePipeline'

export class GenerateProcessorFileExecutor {
    public static Instance: GenerateProcessorFileExecutor = new GenerateProcessorFileExecutor();

    execute(args: GenerateProcessorFileArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateProcessorFilePipeline.Instance, args);
    }
}