import { CSharpYeomanPipelineProcessor } from "../CSharpYeomanPipelineProcessor";
import { CSharpYeomanPipelineArguments } from "../CSharpYeomanPipelineArguments";
import { Defaults } from "../../Defaults";

export class Initializing extends CSharpYeomanPipelineProcessor {
    public static readonly Instance = new Initializing();

    public async SafeExecute(args: CSharpYeomanPipelineArguments): Promise<void> {
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
