import { IPipeline, PipelineRunner } from "solid-pipelines";
import { ChooseProgramFlowArguments } from './ChooseProgramFlowArguments'
import { ChooseProgramFlowPipeline } from './ChooseProgramFlowPipeline'

export class ChooseProgramFlowExecutor {
    public static Instance: ChooseProgramFlowExecutor = new ChooseProgramFlowExecutor(ChooseProgramFlowPipeline.Instance);

    constructor(public pipeline: IPipeline) {
    }

    async execute(args: ChooseProgramFlowArguments) : Promise<string> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return args.GetResult();
    }
}