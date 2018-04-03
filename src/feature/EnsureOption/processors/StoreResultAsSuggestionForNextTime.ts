import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import S from "string";

export class StoreResultAsSuggestionForNextTime extends EnsureOptionProcessor {
    public static readonly Instance = new StoreResultAsSuggestionForNextTime();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        let dict: {} = args.yeomanGenerator.config.get(EnsureOptionProcessor.DefaultValuesKey);

        if (!dict) {
            dict = {};
        }

        dict[args.optionName] = args.result;

        args.yeomanGenerator.config.set(EnsureOptionProcessor.DefaultValuesKey, dict);
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = args.storeAsSuggestionForNextTime && !S(args.result).isEmpty();
        return safeCondition;
    }
}
