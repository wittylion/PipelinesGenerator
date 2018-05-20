import { IPipeline, PipelineRunner, PipelineMessage, PipelineExecutor } from "solid-pipelines";
import { GenerateExecutorFileArguments } from './GenerateExecutorFileArguments'
import { GenerateExecutorFilePipeline } from './GenerateExecutorFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { inject, injectable } from "inversify";
import GENERATE_EXECUTOR_FILE from "./ServiceIdentifiers";
import "reflect-metadata";

@injectable()
export class GenerateExecutorFileExecutor extends PipelineExecutor {

    constructor(

        @inject(GENERATE_EXECUTOR_FILE.PIPELINE)
        public pipeline: IPipeline

    ) {
        super(pipeline);
    }

    async execute(args: GenerateExecutorFileArguments): Promise<{ result: CreatedFileResult, messages: PipelineMessage[] }> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {
            result: args.GetResult(),
            messages: args.GetAllMessages()
        };
    }
}