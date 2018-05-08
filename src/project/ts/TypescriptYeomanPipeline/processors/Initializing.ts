import { TypescriptYeomanPipelineProcessor } from "../TypescriptYeomanPipelineProcessor";
import { TypescriptYeomanPipelineArguments } from "../TypescriptYeomanPipelineArguments";
import { Defaults } from "../../Defaults";
import { IModelsProvider } from "../../../../feature/GenerateCommonFiles/IModelsProvider";
import GENERATE_COMMON_FILES from "../../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { ModelsProvider } from "../../GenerateCommonFiles";

export class Initializing extends TypescriptYeomanPipelineProcessor {
    public static readonly Instance = new Initializing();

    public async SafeExecute(args: TypescriptYeomanPipelineArguments): Promise<void> {

        args.container.bind<IModelsProvider>(GENERATE_COMMON_FILES.MODELS_PROVIDER)
            .to(ModelsProvider);

        Defaults.initializeModels(args.yeomanGenerator);
    }

    public SafeCondition(args: TypescriptYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: TypescriptYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
