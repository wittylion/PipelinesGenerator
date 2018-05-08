import { Defaults } from "../../Defaults";
import { Defaults as CSharpDefaults } from "../../../cs/Defaults";
import { SitecoreYeomanPipelineProcessor } from "../SitecoreYeomanPipelineProcessor";
import { SitecoreYeomanPipelineArguments } from "../SitecoreYeomanPipelineArguments";
import { IModelsProvider } from "../../../../feature/GenerateCommonFiles/IModelsProvider";
import GENERATE_COMMON_FILES from "../../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { ModelsProvider } from "../../GenerateCommonFiles/ModelsProvider";
import { IGeneratorsProvider } from "../../../../feature/GenerateCommonFiles/abstractions/IGeneratorsProvider";
import { GeneratorsProvider } from "../../../cs/GenerateCommonFiles/GeneratorsProvider";
import { injectProgramFlow } from "../../../../feature/ProgramFlow/DependencyInjection";
import { IPipeline } from "solid-pipelines";
import PROGRAM_FLOW from "../../../../feature/ProgramFlow/ServiceIdentifiers";
import YEOMAN from "../../../../foundation/YeomanPipeline/ServiceIdentifiers";
import Generator = require("yeoman-generator");

export class Initializing extends SitecoreYeomanPipelineProcessor {
    public static readonly Instance = new Initializing();

    public async SafeExecute(args: SitecoreYeomanPipelineArguments): Promise<void> {

        args.container.bind<Generator>(YEOMAN.INSTANCE)
            .toConstantValue(args.yeomanGenerator);

        args.container.bind<IModelsProvider>(GENERATE_COMMON_FILES.MODELS_PROVIDER)
            .to(ModelsProvider);
            
        args.container.bind<IGeneratorsProvider>(GENERATE_COMMON_FILES.GENERATORS_PROVIDER)
            .to(GeneratorsProvider);

        injectProgramFlow(args.container);
        
        CSharpDefaults.initializeModels(args.yeomanGenerator);
        Defaults.initializeModels(args.yeomanGenerator);
    }

    public SafeCondition(args: SitecoreYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: SitecoreYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
