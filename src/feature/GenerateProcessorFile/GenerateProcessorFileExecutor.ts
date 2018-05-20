import { PipelineRunner, PipelineMessage, MessageFilter, IPipeline, PipelineExecutor } from "solid-pipelines";
import { GenerateProcessorFilePipeline } from './GenerateProcessorFilePipeline'
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import GENERATE_PROCESSOR_FILE from "./ServiceIdentifiers";

@injectable()
export class GenerateProcessorFileExecutor extends PipelineExecutor {
    constructor(

        @inject(GENERATE_PROCESSOR_FILE.PIPELINE)
        public pipeline: IPipeline,

        public runner: PipelineRunner

    ) {
        super(pipeline, runner);
    }
}