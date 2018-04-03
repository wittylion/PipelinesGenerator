import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");

export class GenerateFileFromTemplateArguments extends PipelineContext {
    yeomanGenerator: Generator;

    className: string;
    fileName: string;
    destination: string;

    ensureSuffixInFileName: boolean = true;
    ensureSuffixInClassName: boolean = true;

    suffix: string;
    extension: string;

    templateFileName: string;
    templateDestination: string;

    ensureLeadingClassNameSubdirectory: boolean = false;
    subdirectoriesNames: string[] = [];
    subdirectoryCaseTuner: (subdirectory: string) => string;

    creationOptions: {} = {};
}
