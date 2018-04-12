import { PipelineRunner, PipelineMessage } from "solid-pipelines";
import { GenerateMessagesFileArguments } from './GenerateMessagesFileArguments'
import { GenerateMessagesFilePipeline } from './GenerateMessagesFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";

export class GenerateMessagesFileExecutor {
    public static Instance: GenerateMessagesFileExecutor = new GenerateMessagesFileExecutor();

    async execute(args: GenerateMessagesFileArguments) : Promise<{result: CreatedFileResult, messages: PipelineMessage[]}> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(GenerateMessagesFilePipeline.Instance, args);

        return {
            result: args.GetResult(),
            messages: args.GetAllMessages()
        };
    }
}