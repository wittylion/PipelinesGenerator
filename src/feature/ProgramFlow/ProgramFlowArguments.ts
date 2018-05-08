import { PipelineContext } from "solid-pipelines";
import { GenerateCommonPipelineFilesExecutor, GenerateCommonPipelineFilesArguments } from "../GenerateCommonFiles";

import Generator = require("yeoman-generator");
import { IModelsProvider } from "../GenerateCommonFiles/IModelsProvider";
import { IGeneratorsProvider } from "../GenerateCommonFiles/abstractions/IGeneratorsProvider";
import { DefaultGeneratorsProvider } from "../GenerateCommonFiles/DefaultGeneratorsProvider";
import { YeomanContext } from "../../foundation/PipelinesExtensions";

import { injectable, inject } from "inversify";
import "reflect-metadata";
import GENERATE_COMMON_FILES from "../GenerateCommonFiles/ServiceIdentifiers";
import YEOMAN from "../../foundation/YeomanPipeline/ServiceIdentifiers";

@injectable()
export class ProgramFlowArguments extends YeomanContext {

    constructor(

        @inject(YEOMAN.INSTANCE)
        yeomanGenerator: Generator,

        @inject(GENERATE_COMMON_FILES.MODELS_PROVIDER)
        public modelsProvider: IModelsProvider,
        
        @inject(GENERATE_COMMON_FILES.GENERATORS_PROVIDER)
        public generatorsProvider: IGeneratorsProvider
    ) {
        super(yeomanGenerator);
    }

    selectedDesiredFlow: string;
}
