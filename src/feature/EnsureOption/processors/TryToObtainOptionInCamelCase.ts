import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import S from "string";
import { ObtainOptionExecutor, ObtainOptionArguments } from "../../ObtainOption";
import _ from "lodash";

export class TryToObtainOptionInCamelCase extends EnsureOptionProcessor {
    public static readonly Instance = new TryToObtainOptionInCamelCase();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        let option = _.camelCase(args.optionName);
        args.result = await ObtainOptionExecutor.Instance.obtainByKey(args.yeomanGenerator, option);
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = !S(args.optionName).isEmpty() && S(args.result).isEmpty();
        return safeCondition;
    }
}
