import { Defaults } from "../../Defaults";
import { Defaults as CSharpDefaults } from "../../../cs/Defaults";
import { SitecoreYeomanPipelineProcessor } from "../SitecoreYeomanPipelineProcessor";
import { SitecoreYeomanPipelineArguments } from "../SitecoreYeomanPipelineArguments";

export class Initializing extends SitecoreYeomanPipelineProcessor {
    public static readonly Instance = new Initializing();

    public async SafeExecute(args: SitecoreYeomanPipelineArguments): Promise<void> {
        CSharpDefaults.initializeModels();
        Defaults.initializeModels();
    }

    public SafeCondition(args: SitecoreYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: SitecoreYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
