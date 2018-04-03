import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import S from "string";

export class StoreResultAsDefaultValueForNextTime extends EnsureOptionProcessor {
    public static readonly Instance = new StoreResultAsDefaultValueForNextTime();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        args.yeomanGenerator.config.set(args.optionName, args.result);
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = args.storeAsDefaultForNextTime && !S(args.result).isEmpty();
        return safeCondition;
    }
}
