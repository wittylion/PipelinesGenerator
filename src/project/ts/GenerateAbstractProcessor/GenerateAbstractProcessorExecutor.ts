import { PipelineRunner } from "solid-pipelines";
import { GenerateAbstractProcessorArguments } from './GenerateAbstractProcessorArguments'
import { GenerateAbstractProcessorPipeline } from './GenerateAbstractProcessorPipeline'

export class GenerateAbstractProcessorExecutor {
    public static Instance: GenerateAbstractProcessorExecutor = new GenerateAbstractProcessorExecutor();

    execute(args: GenerateAbstractProcessorArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateAbstractProcessorPipeline.Instance, args);
    }
}