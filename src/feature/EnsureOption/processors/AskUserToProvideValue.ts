import { EnsureOptionProcessor } from "../EnsureOptionProcessor";
import { EnsureOptionArguments } from "../EnsureOptionArguments";
import { Question } from "yeoman-generator";

export class AskUserToProvideValue extends EnsureOptionProcessor {
    public static readonly Instance = new AskUserToProvideValue();

    public async SafeExecute(args: EnsureOptionArguments): Promise<void> {
        var optionValueQuestion: Question = {
            type: args.inputType,
            name: args.optionName,
            message: args.questionMessage,
            default: args.suggestionOfDefaultValue
        };

        let answer = await args.yeomanGenerator.prompt(optionValueQuestion);
        args.result = answer[args.optionName];
    }

    public SafeCondition(args: EnsureOptionArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureOptionArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
