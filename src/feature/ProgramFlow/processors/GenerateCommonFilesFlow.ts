import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { MessageFilter } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments, GenerateCommonPipelineFilesExecutor } from "../../GenerateCommonFiles";
import { inject, injectable } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import GENERATE_COMMON_FILES from "../../GenerateCommonFiles/ServiceIdentifiers";
import { IModelsProvider } from "../../GenerateCommonFiles/IModelsProvider";
import { IGeneratorsProvider } from "../../GenerateCommonFiles/abstractions/IGeneratorsProvider";
import Generator = require("yeoman-generator");
import "reflect-metadata"

@injectable()
export class GenerateCommonFilesFlow extends ProgramFlowProcessor {
    constructor(

        @inject(YEOMAN.INSTANCE)
        private yeomanGenerator: Generator,

        @inject(GENERATE_COMMON_FILES.MODELS_PROVIDER)
        private modelsProvider: IModelsProvider,

        @inject(GENERATE_COMMON_FILES.GENERATORS_PROVIDER)
        private generatorsProvider: IGeneratorsProvider,

        @inject(GENERATE_COMMON_FILES.EXECUTOR)
        private commonFilesGenerator: GenerateCommonPipelineFilesExecutor
    ) {
        super();
    }

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {

        let commonFilesGeneratorArguments = new GenerateCommonPipelineFilesArguments(this.yeomanGenerator);
        commonFilesGeneratorArguments.modelsProvider = this.modelsProvider;
        commonFilesGeneratorArguments.generatorsProvider = this.generatorsProvider;
        await this.commonFilesGenerator.Execute(commonFilesGeneratorArguments);

        args.AddMessageObjects(
            commonFilesGeneratorArguments.GetAllMessages());
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = args.selectedDesiredFlow === GenerateCommonPipelineFilesExecutor.Identifier;
        return safeCondition;
    }
}
