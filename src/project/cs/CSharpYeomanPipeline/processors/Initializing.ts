import { CSharpYeomanPipelineProcessor } from "../CSharpYeomanPipelineProcessor";
import { CSharpYeomanPipelineArguments } from "../CSharpYeomanPipelineArguments";
import { Defaults } from "../../Defaults";
import { IModelsProvider } from "../../../../feature/GenerateCommonFiles/IModelsProvider";
import GENERATE_COMMON_FILES from "../../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { ModelsProvider } from "../../GenerateCommonFiles/ModelsProvider";
import { IGeneratorsProvider } from "../../../../feature/GenerateCommonFiles/abstractions/IGeneratorsProvider";
import { GeneratorsProvider } from "../../GenerateCommonFiles/GeneratorsProvider";
import Generator = require("yeoman-generator");
import YEOMAN from "../../../../foundation/YeomanPipeline/ServiceIdentifiers";
import { injectProgramFlow } from "../../../../feature/ProgramFlow/DependencyInjection";

export class Initializing extends CSharpYeomanPipelineProcessor {
    public static readonly Instance = new Initializing();

    public async SafeExecute(args: CSharpYeomanPipelineArguments): Promise<void> {
        
        args.container.bind<Generator>(YEOMAN.INSTANCE)
            .toConstantValue(args.yeomanGenerator);

        args.container.bind<IModelsProvider>(GENERATE_COMMON_FILES.MODELS_PROVIDER)
            .to(ModelsProvider);
            
        args.container.bind<IGeneratorsProvider>(GENERATE_COMMON_FILES.GENERATORS_PROVIDER)
            .to(GeneratorsProvider);
            
        injectProgramFlow(args.container);
        
        Defaults.initializeModels(args.yeomanGenerator);
    }

    public SafeCondition(args: CSharpYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: CSharpYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
