import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import { InputTypeEnum } from "../InputTypeEnum";

export class EnsureAnswerInputType extends EnsureOptionProcessor {
    public static readonly Instance = new EnsureAnswerInputType();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        args.inputType = InputTypeEnum.Input;
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = !args.inputType;
        return safeCondition;
    }
}
