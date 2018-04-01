import { GenerateTypescriptArgumentsProcessor } from "../GenerateTypescriptArgumentsProcessor";
import { GenerateTypescriptArguments } from "../GenerateTypescriptArguments";
import S from "string";

export class EnsureArgumentsFileName extends GenerateTypescriptArgumentsProcessor {
    public static readonly Instance = new EnsureArgumentsFileName();

    public async SafeExecute(args: GenerateTypescriptArguments): Promise<void> {
        args.argumentsFileName = S(args.argumentsName).ensureRight(".ts").s;
    }

    public SafeCondition(args: GenerateTypescriptArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptArguments): boolean {
        let safeCondition = S(args.argumentsFileName).isEmpty();
        return safeCondition;
    }
}
