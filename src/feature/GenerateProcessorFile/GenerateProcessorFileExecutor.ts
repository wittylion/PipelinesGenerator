import { PipelineRunner, PipelineMessage, MessageFilter, IPipeline } from "solid-pipelines";
import { GenerateProcessorFilePipeline } from './GenerateProcessorFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";

export class GenerateProcessorFileExecutor {
    constructor(public pipeline: IPipeline) {
    }

    async execute(args: GenerateFileModel): Promise<void> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);
    }
}