import { PipelineRunner } from "solid-pipelines";
import { GenerateAbstractProcessorFileArguments } from './GenerateAbstractProcessorFileArguments'
import { GenerateAbstractProcessorFilePipeline } from './GenerateAbstractProcessorFilePipeline'

export class GenerateAbstractProcessorFileExecutor {
    public static Instance: GenerateAbstractProcessorFileExecutor = new GenerateAbstractProcessorFileExecutor();

    execute(args: GenerateAbstractProcessorFileArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateAbstractProcessorFilePipeline.Instance, args);
    }
}