import { PipelineRunner, PipelineMessage, MessageFilter } from "solid-pipelines";
import { GenerateProcessorFileArguments } from './GenerateProcessorFileArguments'
import { GenerateProcessorFilePipeline } from './GenerateProcessorFilePipeline'

export class GenerateProcessorFileExecutor {
    public static Instance: GenerateProcessorFileExecutor = new GenerateProcessorFileExecutor();

    async execute(args: GenerateProcessorFileArguments): Promise<{ messages: PipelineMessage[] }> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(GenerateProcessorFilePipeline.Instance, args);

        return { messages: args.GetMessages(MessageFilter.All) };
    }
}