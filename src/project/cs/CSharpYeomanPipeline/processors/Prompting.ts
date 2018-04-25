import { CSharpYeomanPipelineProcessor } from "../CSharpYeomanPipelineProcessor";
import { CSharpYeomanPipelineArguments } from "../CSharpYeomanPipelineArguments";
import { CSharpYeomanPipelineMessages } from "../CSharpYeomanPipelineMessages";

export class Prompting extends CSharpYeomanPipelineProcessor {
    public static readonly Instance = new Prompting();

    public async SafeExecute(args: CSharpYeomanPipelineArguments): Promise<void> {
        args.yeomanGenerator.log(CSharpYeomanPipelineMessages.Greeting);
    }

    public SafeCondition(args: CSharpYeomanPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: CSharpYeomanPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
