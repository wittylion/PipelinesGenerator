import { PipelineRunner } from "solid-pipelines";
import { ChooseProjectArguments } from './ChooseProjectArguments'
import { ChooseProjectPipeline } from './ChooseProjectPipeline'

export class ChooseProjectExecutor {
    public static Instance: ChooseProjectExecutor = new ChooseProjectExecutor();

    execute(args: ChooseProjectArguments) : Promise<void> {
        var runner:PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(ChooseProjectPipeline.Instance, args);
    }
}