import { IPipeline, PipelineRunner, PipelineMessage } from "solid-pipelines";
import { ResolveFileDependencyArguments } from './ResolveFileDependencyArguments'
import { ResolveFileDependencyPipeline } from './ResolveFileDependencyPipeline'

import Generator = require("yeoman-generator");

export class ResolveFileDependencyExecutor {
    public static Instance: ResolveFileDependencyExecutor = new ResolveFileDependencyExecutor(ResolveFileDependencyPipeline.Instance);

    public static resolveFile(
        yeomanGenerator: Generator,
        fileNamePattern: string,
        fromDirectory: string
    ) {
        return ResolveFileDependencyExecutor.Instance.resolveFile(yeomanGenerator, fileNamePattern, fromDirectory);
    }

    resolveFile(
        yeomanGenerator: Generator,
        fileNamePattern: string,
        fromDirectory: string
    ): Promise<{ result: string, messages: PipelineMessage[] }> {
        let args: ResolveFileDependencyArguments = new ResolveFileDependencyArguments(yeomanGenerator, fileNamePattern, fromDirectory);
        return this.execute(args);
    }

    constructor(public pipeline: IPipeline) {
    }

    async execute(args: ResolveFileDependencyArguments): Promise<{ result: string, messages: PipelineMessage[] }> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {
            messages: args.GetAllMessages(),
            result: args.GetResult()
        };
    }
}