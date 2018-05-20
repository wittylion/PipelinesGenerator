import { IPipeline, PipelineRunner, PipelineExecutor, PipelineContext } from "solid-pipelines";
import { FindFileArguments } from './FindFileArguments'
import { FindFilePipeline } from './FindFilePipeline'
import { inject, injectable } from "inversify";
import FIND_FILE from "./ServiceIdentifiers";
import "reflect-metadata";

@injectable()
export class FindFileExecutor extends PipelineExecutor {
    constructor(

        @inject(FIND_FILE.PIPELINE)
        public pipeline: IPipeline,

        public runner: PipelineRunner
    ) {
        super(pipeline, runner);
    }
}