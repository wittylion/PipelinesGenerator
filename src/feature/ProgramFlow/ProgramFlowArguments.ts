import { PipelineContext } from "solid-pipelines";
import { GenerateCommonPipelineFilesExecutor, GenerateCommonPipelineFilesArguments } from "../GenerateCommonFiles";

import Generator = require("yeoman-generator");
import { IModelsProvider } from "../GenerateCommonFiles/IModelsProvider";
import { IGeneratorsProvider } from "../GenerateCommonFiles/abstractions/IGeneratorsProvider";
import { DefaultGeneratorsProvider } from "../GenerateCommonFiles/DefaultGeneratorsProvider";
import { YeomanContext } from "../../foundation/PipelinesExtensions";

export class ProgramFlowArguments extends YeomanContext {

    constructor(
        yeomanGenerator: Generator,
        public modelsProvider: IModelsProvider,
        public generatorsProvider: IGeneratorsProvider
    ) {
        super(yeomanGenerator);
    }

    selectedDesiredFlow: string;
}
