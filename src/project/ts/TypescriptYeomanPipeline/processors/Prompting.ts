import { TypescriptYeomanPipelineProcessor } from "../TypescriptYeomanPipelineProcessor";
import { TypescriptYeomanPipelineArguments } from "../TypescriptYeomanPipelineArguments";
import { TypescriptYeomanPipelineMessages } from "../TypescriptYeomanPipelineMessages";

export class Prompting extends TypescriptYeomanPipelineProcessor {
    public static readonly Instance = new Prompting();

    public async SafeExecute(args: TypescriptYeomanPipelineArguments): Promise<void> {
        args.yeomanGenerator.log(TypescriptYeomanPipelineMessages.Greeting);
    }

    public SafeCondition(args: TypescriptYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: TypescriptYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
