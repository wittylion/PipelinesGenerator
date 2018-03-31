import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");

export class GenerateTypescriptPipelineArguments extends PipelineContext {
    yeomanGenerator: Generator;

    pipelineName: string;
    pipelineFileName: string;
    pipelineDestination: string;

    ensurePipelineSuffixInFileName: boolean = true;
    ensurePipelineSuffixInClassName: boolean = false;

    templateFileName: string;
    templateDestination: string;

    createSubdirectory: boolean = false;
    subdirectoryName: string;

    creationOptions: {} = {};
}
