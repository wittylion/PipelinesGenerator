import { PipelineRunner, IPipeline } from "solid-pipelines";
import { GenerateArgumentsFileArguments } from './GenerateArgumentsFileArguments'
import { GenerateArgumentsFilePipeline } from './GenerateArgumentsFilePipeline'

export class GenerateArgumentsFileExecutor {
    public static Instance: GenerateArgumentsFileExecutor = new GenerateArgumentsFileExecutor(GenerateArgumentsFilePipeline.Instance);

    constructor(public pipeline: IPipeline) {
        
    }

    execute(args: GenerateArgumentsFileArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(this.pipeline, args);
    }
}