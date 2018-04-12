import { PipelineRunner, MessageFilter } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments } from './GenerateCommonPipelineFilesArguments'
import { GenerateCommonPipelineFilesPipeline } from './GenerateCommonPipelineFilesPipeline'

export class GenerateCommonPipelineFilesExecutor {
    public static Identifier = "createCommonFiles";
    public static Instance: GenerateCommonPipelineFilesExecutor = new GenerateCommonPipelineFilesExecutor(GenerateCommonPipelineFilesPipeline.Instance);

    constructor(public pipeline: GenerateCommonPipelineFilesPipeline) {
    }

    async execute(args: GenerateCommonPipelineFilesArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        let messages = args.GetMessages(MessageFilter.Errors | MessageFilter.Warnings);
        if (messages.length > 0) {
            args.yeomanGenerator.log(messages.map(x => x.Message).join('\n'));
        }
    }
}