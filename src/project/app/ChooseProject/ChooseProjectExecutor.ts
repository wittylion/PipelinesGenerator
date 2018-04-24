import { PipelineRunner, PipelineMessage } from "solid-pipelines";
import { ChooseProjectArguments } from './ChooseProjectArguments'
import { ChooseProjectPipeline } from './ChooseProjectPipeline'

export class ChooseProjectExecutor {
    public static Instance: ChooseProjectExecutor = new ChooseProjectExecutor();

    async execute(args: ChooseProjectArguments) : Promise<{result: string, messages: PipelineMessage[]}> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(ChooseProjectPipeline.Instance, args);

        return {
            result: args.GetResult(),
            messages: args.GetAllMessages()
        };
    }
}