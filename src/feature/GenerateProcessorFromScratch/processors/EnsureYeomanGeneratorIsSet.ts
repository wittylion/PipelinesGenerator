import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";

export class EnsureYeomanGeneratorIsSet extends GenerateProcessorFromScratchProcessor {
    public static readonly Instance = new EnsureYeomanGeneratorIsSet();

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        args.AbortPipelineWithErrorAndNoResult("Yeoman generator must be provided to create a processor.");
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition = !args.yeomanGenerator;
        return safeCondition;
    }
}
