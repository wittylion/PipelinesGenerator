import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";

export class ValidateGenerator extends EnsureOptionProcessor {
    public static readonly Instance = new ValidateGenerator();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        if (!args.yeomanGenerator) {
            args.AbortPipelineWithErrorMessage("Yeoman Generator is not provided.");
        }
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
