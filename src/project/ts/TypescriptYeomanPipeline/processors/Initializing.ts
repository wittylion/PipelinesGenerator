import { TypescriptYeomanPipelineProcessor } from "../TypescriptYeomanPipelineProcessor";
import { TypescriptYeomanPipelineArguments } from "../TypescriptYeomanPipelineArguments";
import { Defaults } from "../../Defaults";

export class Initializing extends TypescriptYeomanPipelineProcessor {
    public static readonly Instance = new Initializing();

    public async SafeExecute(args: TypescriptYeomanPipelineArguments): Promise<void> {
        Defaults.initializeModels();
    }

    public SafeCondition(args: TypescriptYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: TypescriptYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
