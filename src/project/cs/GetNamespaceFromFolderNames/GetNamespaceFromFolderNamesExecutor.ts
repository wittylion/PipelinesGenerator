import { IPipeline, PipelineRunner, PipelineMessage } from "solid-pipelines";
import { GetNamespaceFromFolderNamesArguments } from './GetNamespaceFromFolderNamesArguments'
import { GetNamespaceFromFolderNamesPipeline } from './GetNamespaceFromFolderNamesPipeline'

import Generator = require("yeoman-generator");

export class GetNamespaceFromFolderNamesExecutor {
    public static Instance: GetNamespaceFromFolderNamesExecutor = new GetNamespaceFromFolderNamesExecutor(GetNamespaceFromFolderNamesPipeline.Instance);

    constructor(public pipeline: IPipeline) {
    }

    public static async getNamespace(
        destinationPath: string,
        shouldFindProjectDirectory: boolean,
        filePath?: string,
        directories: string[] = [],
    ) : Promise<{result: string, messages: PipelineMessage[]}> {
        
        return GetNamespaceFromFolderNamesExecutor.Instance.getNamespace(
            destinationPath,
            shouldFindProjectDirectory,
            filePath,
            directories,
        );
    }

    async getNamespace(
        destinationPath: string,
        shouldFindProjectDirectory: boolean,
        filePath?: string,
        directories: string[] = [],
    ) : Promise<{result: string, messages: PipelineMessage[]}> {
        
        return this.execute(GetNamespaceFromFolderNamesArguments.create(
            destinationPath,
            shouldFindProjectDirectory,
            filePath,
            directories,
        ));
    }

    async execute(args: GetNamespaceFromFolderNamesArguments) : Promise<{result: string, messages: PipelineMessage[]}> {
        var runner:PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return {messages: args.GetAllMessages(), result: args.GetResult()};
    }
}