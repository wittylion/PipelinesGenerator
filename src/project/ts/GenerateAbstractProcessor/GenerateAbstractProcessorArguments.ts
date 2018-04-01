import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");

export class GenerateAbstractProcessorArguments extends PipelineContext {
    yeomanGenerator: Generator;

    className: string;
    fileName: string;

    ensureSuffixInFileName: boolean = true;
    ensureSuffixInClassName: boolean = true;

    templateFileName: string;

    createSubdirectory: boolean = false;
    subdirectoryName: string;

    argumentsFileName: string;
    argumentsClassName: string;
}
