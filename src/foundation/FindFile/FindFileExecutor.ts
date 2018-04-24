import { IPipeline, PipelineRunner } from "solid-pipelines";
import { FindFileArguments } from './FindFileArguments'
import { FindFilePipeline } from './FindFilePipeline'
import { IFileExistanceChecker } from "./abstractions/IFileExistanceChecker";
import { FileSystemExistanceChecker } from "./FileSystemExistanceChecker";

export class FindFileExecutor {
    public static Instance: FindFileExecutor = new FindFileExecutor(FindFilePipeline.Instance);

    public static findFiles(
        currentDir: string,
        file: string,
        subfolders: string[] = [],
        existanceChecker: IFileExistanceChecker = FileSystemExistanceChecker.Instance
    ): Promise<string[]> {
        return FindFileExecutor.Instance.findFiles(
            currentDir,
            file,
            subfolders,
            existanceChecker
        );
    }

    public findFiles(
        currentDir: string,
        file: string,
        subfolders: string[] = [],
        existanceChecker: IFileExistanceChecker = FileSystemExistanceChecker.Instance
    ): Promise<string[]> {
        let args: FindFileArguments = new FindFileArguments(
            currentDir,
            file,
            subfolders,
            existanceChecker
        );
        return this.execute(args);
    }

    constructor(public pipeline: IPipeline) {
    }

    async execute(args: FindFileArguments): Promise<string[]> {
        var runner: PipelineRunner = new PipelineRunner();

        await runner.RunPipeline(this.pipeline, args);

        return args.files;
    }
}