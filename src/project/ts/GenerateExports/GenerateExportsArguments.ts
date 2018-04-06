import { PipelineContext } from "solid-pipelines";
import path = require("path");

import Generator = require("yeoman-generator");

export class GenerateExportsArguments extends PipelineContext {
    yeomanGenerator: Generator;
    exportFileNames: string[] = [];
    exportFileDestination: string;
    exportRelativePaths: string[] = [];
    filterOnlyNeededExports: boolean;
    exportAllFromDestination: boolean;

    getFilnalName(): string {
        return path.join(this.exportFileDestination, "index.ts");
    }
}
