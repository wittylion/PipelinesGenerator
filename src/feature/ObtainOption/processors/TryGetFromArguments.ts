import { ObtainOptionProcessor } from "../ObtainOptionProcessor";
import { ObtainOptionArguments } from "../ObtainOptionArguments";
import S from "string";

export class TryGetFromArguments extends ObtainOptionProcessor {
    public static readonly Instance = new TryGetFromArguments();

    public async SafeExecute(args: ObtainOptionArguments): Promise<void> {
        let val = args.yeomanGenerator.args[args.optionName];
        if (val) {
            args.SetResultWithInformation(
                val,
                `Value for ${args.optionName} found in arguments: ${val}`
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
