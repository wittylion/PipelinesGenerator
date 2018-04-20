import { PipelineContext, QueryContext } from "solid-pipelines";

import Generator = require("yeoman-generator");

export class GetNamespaceFromFolderNamesArguments extends QueryContext<string> {

    public static create(
        destinationPath: string,
        shouldFindProjectDirectory: boolean,
        filePath?: string,
        directories: string[] = []
    ): GetNamespaceFromFolderNamesArguments { 
        return new GetNamespaceFromFolderNamesArguments(
            destinationPath,
            shouldFindProjectDirectory,
            filePath,
            directories,
        );
    }

    constructor(
        public destinationPath: string,
        public shouldFindProjectDirectory: boolean,
        public filePath?: string,
        public directories: string[] = [],
    
    ) { 
        super();
    }

    projectDirectory: string;
}
