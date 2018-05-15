import { IPipeline, PipelineRunner, PipelineMessage, PipelineExecutor } from "solid-pipelines";
import { ResolveFileDependencyArguments } from './ResolveFileDependencyArguments'
import { ResolveFileDependencyPipeline } from './ResolveFileDependencyPipeline'

import Generator = require("yeoman-generator");
import { inject, injectable } from "inversify";
import RESOLVE_FILE_DEPENDENCY from "./ServiceIdentifiers";
import "reflect-metadata"

@injectable()
export class ResolveFileDependencyExecutor extends PipelineExecutor {

    resolveFile(
        yeomanGenerator: Generator,
        fileId: string,
        fileNamePattern: string,
        fromDirectory: string
    ): Promise<void> {
        let args: ResolveFileDependencyArguments
            = new ResolveFileDependencyArguments(
                yeomanGenerator,
                fileId,
                fileNamePattern,
                fromDirectory
            );
        return this.Execute(args);
    }

    constructor(
        @inject(RESOLVE_FILE_DEPENDENCY.PIPELINE)
        public pipeline: IPipeline,

        public runner: PipelineRunner
    ) {
        super(pipeline, runner);
    }
}