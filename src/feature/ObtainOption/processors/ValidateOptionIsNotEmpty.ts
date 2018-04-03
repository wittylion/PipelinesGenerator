import { ObtainOptionProcessor } from "../ObtainOptionProcessor";
import { ObtainOptionArguments } from "../ObtainOptionArguments";
import S from "string";

export class ValidateYeomanGenerator extends ObtainOptionProcessor {
    public static readonly Instance = new ValidateYeomanGenerator();

    public async SafeExecute(args: ObtainOptionArguments): Promise<void> {
        if (S(args.optionName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You passed an empty option into pipeline, please, specify an option name before trying to get its value.");
        }
    }

    public SafeCondition(args: ObtainOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ObtainOptionArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
