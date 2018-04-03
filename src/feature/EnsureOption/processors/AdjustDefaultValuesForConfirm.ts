import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import S from "string";
import { InputTypeEnum } from "../InputTypeEnum";

export class AdjustDefaultValuesForConfirm extends EnsureOptionProcessor {
    public static readonly Instance = new AdjustDefaultValuesForConfirm();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        args.suggestionOfDefaultValue = S(args.suggestionOfDefaultValue).toBoolean() ? "Yes" : "No";
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = !S(args.suggestionOfDefaultValue).isEmpty() && args.inputType === InputTypeEnum.Confirm;
        return safeCondition;
    }
}
