import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");

export class GenerateTypescriptPipelineArguments extends PipelineContext {
    yeomanGenerator: Generator;

    pipelineName: string;
    pipelineFileName: string;

    ensurePipelineSuffixInFileName: boolean = true;
    ensurePipelineSuffixInClassName: boolean = true;

    templateFileName: string;

    createSubdirectory: boolean = false;
    subdirectoryName: string;

    processorsNames: string[];
}
