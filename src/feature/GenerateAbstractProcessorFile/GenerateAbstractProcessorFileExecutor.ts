import { PipelineRunner, PipelineMessage } from "solid-pipelines";
import { GenerateAbstractProcessorFileArguments } from './GenerateAbstractProcessorFileArguments'
import { GenerateAbstractProcessorFilePipeline } from './GenerateAbstractProcessorFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateAbstractProcessorFileExecutor {
    public static Instance: GenerateAbstractProcessorFileExecutor = new GenerateAbstractProcessorFileExecutor();

    async execute(args: GenerateAbstractProcessorFileArguments): Promise<{ result: CreatedFileResult, messages: PipelineMessage[] }> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(GenerateAbstractProcessorFilePipeline.Instance, args);

        return { result: args.GetResult(), messages: args.GetAllMessages() };
    }
}