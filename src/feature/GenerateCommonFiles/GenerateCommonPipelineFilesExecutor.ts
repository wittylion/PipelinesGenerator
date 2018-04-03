import { PipelineRunner, MessageFilter } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments } from './GenerateCommonPipelineFilesArguments'
import { GenerateCommonPipelineFilesPipeline } from './GenerateCommonPipelineFilesPipeline'

export class GenerateCommonPipelineFilesExecutor {
    public static Instance: GenerateCommonPipelineFilesExecutor = new GenerateCommonPipelineFilesExecutor();

    async execute(args: GenerateCommonPipelineFilesArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(GenerateCommonPipelineFilesPipeline.Instance, args);

        let messages = args.GetMessages(MessageFilter.Errors | MessageFilter.Warnings);
        if (messages.length > 0) {
            args.yeomanGenerator.log(messages.map(x => x.Message).join('\n'));
        }
    }
}