import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import S from "string";

export class ValidateOptionName extends EnsureOptionProcessor {
    public static readonly Instance = new ValidateOptionName();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        if (S(args.optionName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You passed an empty option into pipeline, please, specify an option name before trying to get its value.");
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
