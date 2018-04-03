import { ObtainOptionProcessor } from "../ObtainOptionProcessor";
import { ObtainOptionArguments } from "../ObtainOptionArguments";
import S from "string";

export class TryGetFromStorage extends ObtainOptionProcessor {
    public static readonly Instance = new TryGetFromStorage();

    public async SafeExecute(args: ObtainOptionArguments): Promise<void> {
        args.optionValue = args.yeomanGenerator.config.get(args.optionName);
    }

    public SafeCondition(args: ObtainOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ObtainOptionArguments): boolean {
        let safeCondition = S(args.optionValue).isEmpty() && !S(args.optionName).isEmpty();
        return safeCondition;
    }
}
