import { PipelineContext } from "solid-pipelines";
import { IFileExistanceChecker } from "./abstractions/IFileExistanceChecker";
import { FileSystemExistanceChecker } from "./FileSystemExistanceChecker";

export class FindFileArguments extends PipelineContext {

    public static create(
        currentDir: string,
        file: string,
        subfolders: string[] = [],
        existanceChecker: IFileExistanceChecker = FileSystemExistanceChecker.Instance
    ): FindFileArguments { 
        let instance = new FindFileArguments(currentDir, file, subfolders, existanceChecker);
        return instance;
    }

    constructor(
        public currentDir: string,
        public file: string,
        public subfolders: string[],
        public existanceChecker: IFileExistanceChecker,
    ) { 
        super();
    }
    
    public folders: string[] = [];
    public files: string[] = [];
}
