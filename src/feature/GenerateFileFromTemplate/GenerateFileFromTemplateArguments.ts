import { PipelineContext } from "solid-pipelines";
import Generator = require("yeoman-generator");
import { GenerateFileModel } from "./models/GenerateFileModel";
import { CreatedFileResult } from "./models/CreatedFileResult";

export class GenerateFileFromTemplateArguments extends PipelineContext {
    constructor(
        public yeomanGenerator: Generator,
        public fileModel: GenerateFileModel
    ) {
        super();
    }
    result: CreatedFileResult;

    destination: string;
    templateDestination: string;
    ensureLeadingClassNameSubdirectory: boolean = false;

    creationOptions: {} = {};
}
