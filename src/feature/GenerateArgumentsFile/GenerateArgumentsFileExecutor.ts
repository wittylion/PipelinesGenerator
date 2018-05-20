import { PipelineRunner, IPipeline, PipelineMessage, PipelineExecutor } from "solid-pipelines";
import { GenerateArgumentsFileArguments } from './GenerateArgumentsFileArguments'
import { GenerateArgumentsFilePipeline } from './GenerateArgumentsFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import GENERATE_ARGUMENTS_FILE from "./ServiceIdentifiers";

@injectable()
export class GenerateArgumentsFileExecutor extends PipelineExecutor {

    constructor(

        @inject(GENERATE_ARGUMENTS_FILE.PIPELINE)
        public pipeline: IPipeline

    ) {
        super(pipeline);

    }

    async execute(args: GenerateArgumentsFileArguments) : Promise<{result: CreatedFileResult, messages: PipelineMessage[]}> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {
            messages: args.GetAllMessages(),
            result: args.GetResult()
        };
    }
}