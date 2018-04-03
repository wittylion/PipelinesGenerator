import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import S from "string";
import { ObtainOptionExecutor, ObtainOptionArguments } from "../../ObtainOption";
import _ from "lodash";

export class TryToObtainOption extends EnsureOptionProcessor {
    public static readonly Instance = new TryToObtainOption();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        args.result = await ObtainOptionExecutor.Instance.obtainByKey(args.yeomanGenerator, args.optionName);

        if (!S(args.result).isEmpty()) { 
            args.AbortPipelineWithInformationMessage(`Option ${args.optionName} found.`); 
        }
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = !S(args.optionName).isEmpty() && S(args.result).isEmpty();
        return safeCondition;
    }
}
