import { TypescriptYeomanPipelineProcessor } from "../TypescriptYeomanPipelineProcessor";
import { TypescriptYeomanPipelineArguments } from "../TypescriptYeomanPipelineArguments";
import { Defaults } from "../../Defaults";
import { IModelsProvider } from "../../../../feature/GenerateCommonFiles/IModelsProvider";
import GENERATE_COMMON_FILES from "../../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { ModelsProvider } from "../../GenerateCommonFiles";
import { GeneratorsProvider } from "../../GenerateCommonFiles/GeneratorsProvider";
import { IGeneratorsProvider } from "../../../../feature/GenerateCommonFiles/abstractions/IGeneratorsProvider";
import Generator = require("yeoman-generator");
import YEOMAN from "../../../../foundation/YeomanPipeline/ServiceIdentifiers";
import { IPipeline } from "solid-pipelines";
import PROGRAM_FLOW from "../../../../feature/ProgramFlow/ServiceIdentifiers";
import { TypescriptProgramFlowPipeline } from "../../TypescriptProgramFlow/TypescriptProgramFlowPipeline";
import { injectTypescriptDependencies } from "../../DependencyInjection/Inject";

export class Initializing extends TypescriptYeomanPipelineProcessor {
    public static readonly Instance = new Initializing();

    public async SafeExecute(args: TypescriptYeomanPipelineArguments): Promise<void> {

        let generator = args.container.get<Generator>(YEOMAN.INSTANCE);

        injectTypescriptDependencies(args.container);

        Defaults.initializeModels(generator);
    }

    public SafeCondition(args: TypescriptYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: TypescriptYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
