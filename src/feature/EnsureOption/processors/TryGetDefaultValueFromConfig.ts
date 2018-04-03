import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import S from "string";

export class TryGetDefaultValueFromConfig extends EnsureOptionProcessor {
    public static readonly Instance = new TryGetDefaultValueFromConfig();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        let dict: {} = args.yeomanGenerator.config.get(EnsureOptionProcessor.DefaultValuesKey);

        if (!dict || !dict[args.optionName]) {
            return;
        }

        args.suggestionOfDefaultValue = dict[args.optionName];
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = S(args.suggestionOfDefaultValue).isEmpty();
        return safeCondition;
    }
}
