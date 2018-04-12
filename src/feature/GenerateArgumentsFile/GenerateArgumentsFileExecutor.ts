import { PipelineRunner, IPipeline, PipelineMessage } from "solid-pipelines";
import { GenerateArgumentsFileArguments } from './GenerateArgumentsFileArguments'
import { GenerateArgumentsFilePipeline } from './GenerateArgumentsFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateArgumentsFileExecutor {
    public static Instance: GenerateArgumentsFileExecutor = new GenerateArgumentsFileExecutor(GenerateArgumentsFilePipeline.Instance);

    constructor(public pipeline: IPipeline) {
        
    }

    async execute(args: GenerateArgumentsFileArguments) : Promise<{result: CreatedFileResult, messages: PipelineMessage[]}> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {
            messages: args.GetAllMessages(),
            result: args.GetResult()
        };
    }
}