import { GenerateTypescriptArgumentsProcessor } from "../GenerateTypescriptArgumentsProcessor";
import { GenerateTypescriptArguments } from "../GenerateTypescriptArguments";

export class ExecuteGenerator extends GenerateTypescriptArgumentsProcessor {
    public static readonly Instance = new ExecuteGenerator();

    public async SafeExecute(args: GenerateTypescriptArguments): Promise<void> {
        throw new Error("Not implemented.");
    }

    public SafeCondition(args: GenerateTypescriptArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
