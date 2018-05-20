import { PipelineContext } from "solid-pipelines";
import { FileExistanceChecker } from "../TypeDefinitions/CheckFileExistance";

export class FindFileArguments extends PipelineContext {

    constructor(
        public currentDir: string,
        public file: string,
        public subfolders: string[]= []
    ) {
        super();
    }

    public folders: string[] = [];
    public files: string[] = [];
}
