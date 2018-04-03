import { ObtainOptionProcessor } from "../ObtainOptionProcessor";
import { ObtainOptionArguments } from "../ObtainOptionArguments";

export class ValidateYeomanGenerator extends ObtainOptionProcessor {
    public static readonly Instance = new ValidateYeomanGenerator();

    public async SafeExecute(args: ObtainOptionArguments): Promise<void> {
        if (!args.yeomanGenerator) {
            args.AbortPipelineWithErrorMessage("Yeoman Generator is not provided.");
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
