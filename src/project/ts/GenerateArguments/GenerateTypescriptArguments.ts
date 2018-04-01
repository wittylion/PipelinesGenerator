import { PipelineContext } from "solid-pipelines";

export class GenerateTypescriptArguments extends PipelineContext {
    yeomanGenerator: Generator;

    argumentsName: string;
    argumentsFileName: string;

    ensureArgumentsSuffixInFileName: boolean = true;
    ensureArgumentsSuffixInClassName: boolean = true;

    templateFileName: string;

    createSubdirectory: boolean = false;
    subdirectoryName: string;

    processorsNames: string[];
}
