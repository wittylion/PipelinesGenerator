import { PipelineContext } from "solid-pipelines";
import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { CreatedFileResult } from "../GenerateFileFromTemplate/models/CreatedFileResult";
import { GenerateProcessorFileExecutor } from "../GenerateProcessorFile";
import { YeomanQueryContext } from "../../foundation/PipelinesExtensions";

import Generator = require("yeoman-generator");

export class GenerateProcessorFromScratchArguments extends YeomanQueryContext<CreatedFileResult> {
    constructor(
        yeomanGenerator: Generator,
        public model: GenerateFileModel,
        public argumentsModel: CreatedFileResult,
        public processorModel: CreatedFileResult,
        public processorGenerator: GenerateProcessorFileExecutor

    ) {
        super(yeomanGenerator);
    }
}
