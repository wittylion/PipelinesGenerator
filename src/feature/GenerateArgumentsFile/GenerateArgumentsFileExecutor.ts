import { PipelineRunner } from "solid-pipelines";
import { GenerateArgumentsFileArguments } from './GenerateArgumentsFileArguments'
import { GenerateArgumentsFilePipeline } from './GenerateArgumentsFilePipeline'

export class GenerateArgumentsFileExecutor {
    public static Instance: GenerateArgumentsFileExecutor = new GenerateArgumentsFileExecutor();

    execute(args: GenerateArgumentsFileArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(GenerateArgumentsFilePipeline.Instance, args);
    }
}