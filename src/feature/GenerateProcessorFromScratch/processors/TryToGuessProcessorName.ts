import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";
import { GenerateProcessorFileOptions } from "../../GenerateProcessorFile/GenerateProcessorFileOptions";
import { ObtainOptionExecutor } from "../../ObtainOption";
import S from "string";

export class TryToGuessProcessorName extends GenerateProcessorFromScratchProcessor {
    public static readonly Instance = new TryToGuessProcessorName();

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        const optionName = GenerateProcessorFileOptions.PROCESSOR_NAME;

        let optionResult 
            = await ObtainOptionExecutor.obtainByKey(args.yeomanGenerator, optionName);

        if (!S(optionResult).isEmpty()) {
            args.guesses.push(optionResult);
        }
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
