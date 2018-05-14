import { PipelineRunner, MessageFilter, PipelineExecutor } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments } from './GenerateCommonPipelineFilesArguments'
import { GenerateCommonPipelineFilesPipeline } from './GenerateCommonPipelineFilesPipeline'

export class GenerateCommonPipelineFilesExecutor extends PipelineExecutor {
    public static Identifier = "createCommonFiles";
    public static Instance: GenerateCommonPipelineFilesExecutor = new GenerateCommonPipelineFilesExecutor(GenerateCommonPipelineFilesPipeline.Instance);

    constructor(public pipeline: GenerateCommonPipelineFilesPipeline) {
        super(pipeline);
    }
}