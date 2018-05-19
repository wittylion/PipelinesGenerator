import { IPipeline, PipelineRunner, PipelineMessage, PipelineExecutor } from "solid-pipelines";
import { GetNamespaceFromFolderNamesArguments } from './GetNamespaceFromFolderNamesArguments'
import { GetNamespaceFromFolderNamesPipeline } from './GetNamespaceFromFolderNamesPipeline'

import Generator = require("yeoman-generator");

import "reflect-metadata";
import { injectable, inject } from "inversify";
import GET_NAMESPACE from "./ServiceIdentifiers";

@injectable()
export class GetNamespaceFromFolderNamesExecutor extends PipelineExecutor {

    constructor(

        @inject(GET_NAMESPACE.PIPELINE)
        public pipeline: IPipeline,

        public runner: PipelineRunner
    ) {
            super(pipeline, runner);
    }

    async execute(args: GetNamespaceFromFolderNamesArguments) : Promise<{result: string, messages: PipelineMessage[]}> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {messages: args.GetAllMessages(), result: args.GetResult()};
    }
}