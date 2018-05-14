import { ObtainOptionProcessor } from "../ObtainOptionProcessor";
import { ObtainOptionArguments } from "../ObtainOptionArguments";
import S from "string";

export class TryGetFromOptions extends ObtainOptionProcessor {
    public static readonly Instance = new TryGetFromOptions();

    public async SafeExecute(args: ObtainOptionArguments): Promise<void> {
        let val = args.yeomanGenerator.options[args.optionName];
        if (val) {
            args.SetResultWithInformation(
                val,
                `Value for ${args.optionName} found in options: ${val}`
            );
        }
    }

    public SafeCondition(args: ObtainOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ObtainOptionArguments): boolean {
        let safeCondition = S(args.GetResult()).isEmpty() && !S(args.optionName).isEmpty();
        return safeCondition;
    }
}
