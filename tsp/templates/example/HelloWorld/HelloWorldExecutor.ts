import { IPipeline, PipelineRunner, PipelineExecutor } from "solid-pipelines";
import { HelloWorldArguments } from './HelloWorldArguments'
import { HelloWorldPipeline } from './HelloWorldPipeline'

export class HelloWorldExecutor extends PipelineExecutor {
    public static Instance: HelloWorldExecutor = new HelloWorldExecutor(HelloWorldPipeline.Instance);

    constructor(
        public pipeline: IPipeline,
        public pipelineRunner: PipelineRunner = PipelineRunner.StaticInstance,
    ) {
        super(pipeline, pipelineRunner);
    }
}