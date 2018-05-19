import { Defaults } from "../../Defaults";
import { Defaults as CSharpDefaults } from "../../../cs/Defaults";
import { SitecoreYeomanPipelineProcessor } from "../SitecoreYeomanPipelineProcessor";
import { SitecoreYeomanPipelineArguments } from "../SitecoreYeomanPipelineArguments";
import { IModelsProvider } from "../../../../feature/GenerateCommonFiles/IModelsProvider";
import GENERATE_COMMON_FILES from "../../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { ModelsProvider } from "../../GenerateCommonFiles/ModelsProvider";
import { IGeneratorsProvider } from "../../../../feature/GenerateCommonFiles/abstractions/IGeneratorsProvider";
import { GeneratorsProvider } from "../../../cs/GenerateCommonFiles/GeneratorsProvider";
import { IPipeline } from "solid-pipelines";
import PROGRAM_FLOW from "../../../../feature/ProgramFlow/ServiceIdentifiers";
import YEOMAN from "../../../../foundation/YeomanPipeline/ServiceIdentifiers";
import Generator = require("yeoman-generator");
import { injectCSharpDependencies } from "../../../cs/DependencyInjection/Inject";

export class Initializing extends SitecoreYeomanPipelineProcessor {
    public static readonly Instance = new Initializing();

    public async SafeExecute(args: SitecoreYeomanPipelineArguments): Promise<void> {

        let generator = args.container.get<Generator>(YEOMAN.INSTANCE);


        injectCSharpDependencies(args.container);

        args.container.rebind<IModelsProvider>(GENERATE_COMMON_FILES.MODELS_PROVIDER)
            .to(ModelsProvider);

        args.container.rebind<IGeneratorsProvider>(GENERATE_COMMON_FILES.GENERATORS_PROVIDER)
            .to(GeneratorsProvider);

        CSharpDefaults.initializeModels(generator);
        Defaults.initializeModels(generator);
    }

    public SafeCondition(args: SitecoreYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: SitecoreYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
