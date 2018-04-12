import { GenerateTypescriptPathProcessor } from "../GenerateTypescriptPathProcessor";
import { GenerateTypescriptPathArguments } from "../GenerateTypescriptPathArguments";
import S from "string";
import { GenerateTypescriptPathMessages } from "../GenerateTypescriptPathMessages";

export class EnsureFromPath extends GenerateTypescriptPathProcessor {
    public static readonly Instance = new EnsureFromPath();

    public async SafeExecute(args: GenerateTypescriptPathArguments): Promise<void> {
        if (S(args.fromPath).isEmpty()) {
            args.AbortPipelineWithErrorAndNoResult(
                GenerateTypescriptPathMessages.FromPathMustBeSpecified
            );
        }
    }

    public SafeCondition(args: GenerateTypescriptPathArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPathArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
