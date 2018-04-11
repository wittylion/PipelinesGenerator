import { IPipeline, PipelineRunner, PipelineMessage } from "solid-pipelines";
import { GenerateTypescriptPathArguments } from './GenerateTypescriptPathArguments'
import { GenerateTypescriptPathPipeline } from './GenerateTypescriptPathPipeline'

export class GenerateTypescriptPathExecutor {
    public static Instance: GenerateTypescriptPathExecutor = new GenerateTypescriptPathExecutor(GenerateTypescriptPathPipeline.Instance);

    constructor(public pipeline: IPipeline) {
    }

    getPath(from: string, to: string): Promise<{ result: string, messages: PipelineMessage[] }> {
        return this.getResult(new GenerateTypescriptPathArguments(from, to));
    }

    async getResult(args: GenerateTypescriptPathArguments): Promise<{ result: string, messages: PipelineMessage[] }> {
        await this.execute(args);
        
        return {
            result: args.GetResult(),
            messages: args.GetAllMessages()
        };
    }

    execute(args: GenerateTypescriptPathArguments): Promise<void> {
        var runner: PipelineRunner = new PipelineRunner();

        return runner.RunPipeline(this.pipeline, args);
    }
}