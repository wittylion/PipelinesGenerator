import { PipelineContext } from "solid-pipelines";
import path = require("path");

import Generator = require("yeoman-generator");

export class GenerateExportsArguments extends PipelineContext {
    constructor(
        public yeomanGenerator: Generator,
        public exportFileDestination: string,
        public filterOnlyNeededExports: boolean = true,
        public exportAllFromDestination: boolean = false,
        public exportFileNames: string[] = [],
    ) {
        super();
    }
    
    exportRelativePaths: string[] = [];

    getFilnalName(): string {
        return path.join(this.exportFileDestination, "index.ts");
    }
}
