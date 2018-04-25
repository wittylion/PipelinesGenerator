import { PipelineRunner, PipelineMessage, MessageFilter, IPipeline } from "solid-pipelines";
import { GenerateProcessorFileArguments } from './GenerateProcessorFileArguments'
import { GenerateProcessorFilePipeline } from './GenerateProcessorFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateProcessorFileExecutor {
    public static Instance: GenerateProcessorFileExecutor = new GenerateProcessorFileExecutor(GenerateProcessorFilePipeline.Instance);

    constructor(public pipeline: IPipeline) {
    }

    async execute(args: GenerateProcessorFileArguments): Promise<{ result: CreatedFileResult, messages: PipelineMessage[] }> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return { result: args.GetResult(), messages: args.GetAllMessages() };
    }
}