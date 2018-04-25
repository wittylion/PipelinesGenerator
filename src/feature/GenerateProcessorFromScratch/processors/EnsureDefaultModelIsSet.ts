import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";

export class EnsureDefaultModelIsSet extends GenerateProcessorFromScratchProcessor {
    public static readonly Instance = new EnsureDefaultModelIsSet();

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        args.AbortPipelineWithErrorAndNoResult("Main data about file, including extension and template, must be provided to create a processor.");
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition = !args.model;
        return safeCondition;
    }
}
