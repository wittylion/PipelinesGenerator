import { PipelineRunner, IPipeline, MessageFilter } from "solid-pipelines";
import { ProgramFlowArguments } from './ProgramFlowArguments'
import { ProgramFlowPipeline } from './ProgramFlowPipeline'

export class ProgramFlowExecutor {
    public static Instance: ProgramFlowExecutor = new ProgramFlowExecutor(ProgramFlowPipeline.Instance);

    constructor(public pipeline: IPipeline) {

    }

    async execute(args: ProgramFlowArguments): Promise<{ message: string }> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {
            message: args
                .GetMessages(MessageFilter.All)
                .map(message => message.Message)
                .join('\n')
        };
    }
}