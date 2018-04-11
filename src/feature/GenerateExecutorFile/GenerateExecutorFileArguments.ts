import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { YeomanContext } from "../../foundation/PipelinesExtensions";

import Generator = require("yeoman-generator");
import { InteractionModeEnum } from "../EnsureFileModel/InteractionModeEnum";

export class GenerateExecutorFileArguments extends YeomanContext {
    
    argumentsClassName: string;
    argumentsFileName: string;
    
    pipelineClassName: string;
    pipelineFileName: string;

    constructor(
        public fileModel: GenerateFileModel,
        public yeomanGenerator: Generator,
        public possibleName?: string,
        public interactionMode?: InteractionModeEnum
    ) {
        super(yeomanGenerator);

    }
}
