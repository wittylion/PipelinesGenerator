import { IPipeline, PipelineRunner, PipelineMessage } from "solid-pipelines";
import { GenerateExecutorFileArguments } from './GenerateExecutorFileArguments'
import { GenerateExecutorFilePipeline } from './GenerateExecutorFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateExecutorFileExecutor {
    public static Instance: GenerateExecutorFileExecutor = new GenerateExecutorFileExecutor(GenerateExecutorFilePipeline.Instance);

    constructor(public pipeline: IPipeline) {
    }

    async execute(args: GenerateExecutorFileArguments): Promise<{ result: CreatedFileResult, messages: PipelineMessage[] }> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {
            result: args.GetResult(),
            messages: args.GetAllMessages()
        };
    }
}