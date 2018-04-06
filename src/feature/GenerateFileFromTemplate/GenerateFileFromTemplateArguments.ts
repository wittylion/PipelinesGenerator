import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { GenerateFileModel } from "./models/GenerateFileModel";

export class GenerateFileFromTemplateArguments extends PipelineContext {
    yeomanGenerator: Generator;
    fileModel: GenerateFileModel;

    destination: string;
    templateDestination: string;
    ensureLeadingClassNameSubdirectory: boolean = false;

    creationOptions: {} = {};
}
