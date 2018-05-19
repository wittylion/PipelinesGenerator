import { PipelineContext } from "solid-pipelines";
import { IFileExistanceChecker } from "./abstractions/IFileExistanceChecker";
import { FileSystemExistanceChecker } from "./FileSystemExistanceChecker";

export class FindFileArguments extends PipelineContext {

    constructor(
        public currentDir: string,
        public file: string,
        public subfolders: string[]= [],
        public existanceChecker: IFileExistanceChecker = FileSystemExistanceChecker.Instance,
    ) {
        super();
    }

    public folders: string[] = [];
    public files: string[] = [];
}
