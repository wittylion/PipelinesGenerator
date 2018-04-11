import { GenerateTypescriptPathProcessor } from "../GenerateTypescriptPathProcessor";
import { GenerateTypescriptPathArguments } from "../GenerateTypescriptPathArguments";
import { GenerateTypescriptPathMessages } from "../GenerateTypescriptPathMessages";
import S from "string";

export class EnsureToPath extends GenerateTypescriptPathProcessor {
    public static readonly Instance = new EnsureToPath();

    public async SafeExecute(args: GenerateTypescriptPathArguments): Promise<void> {
        if (S(args.toPath).isEmpty()) {
            args.AbortPipelineWithErrorAndNoResult(
                GenerateTypescriptPathMessages.ToPathMustBeSpecified
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
