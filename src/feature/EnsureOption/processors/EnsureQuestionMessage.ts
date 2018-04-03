import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import S from "string";
import _ from "lodash";

export class EnsureQuestionMessage extends EnsureOptionProcessor {
    public static readonly Instance = new EnsureQuestionMessage();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        let option = _.capitalize(_.lowerCase(args.optionName));
        args.questionMessage = `Please, provide a value for "${option}" :`
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = S(args.questionMessage).isEmpty();
        return safeCondition;
    }
}
