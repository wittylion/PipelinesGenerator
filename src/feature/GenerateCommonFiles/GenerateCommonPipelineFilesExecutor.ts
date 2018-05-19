import { PipelineRunner, MessageFilter, PipelineExecutor, IPipeline } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments } from './GenerateCommonPipelineFilesArguments'
import { GenerateCommonPipelineFilesPipeline } from './GenerateCommonPipelineFilesPipeline'
import "reflect-metadata";
import { injectable, inject } from "inversify";
import GENERATE_COMMON_FILES from "./ServiceIdentifiers";

@injectable()
export class GenerateCommonPipelineFilesExecutor extends PipelineExecutor {
    public static Identifier = "createCommonFiles";

    constructor(

        @inject(GENERATE_COMMON_FILES.PIPELINE)
        public pipeline: IPipeline,

        public runner: PipelineRunner

    ) {
        super(pipeline, runner);
    }
}