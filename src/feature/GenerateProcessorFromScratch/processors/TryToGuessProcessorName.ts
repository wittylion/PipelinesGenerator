import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";

export class TryToGuessProcessorName extends GenerateProcessorFromScratchProcessor {
    public static readonly Instance = new TryToGuessProcessorName();

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        throw new Error("Not implemented.");
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
