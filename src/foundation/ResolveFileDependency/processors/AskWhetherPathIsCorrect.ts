import { ResolveFileDependencyProcessor } from "../ResolveFileDependencyProcessor";
import { ResolveFileDependencyArguments } from "../ResolveFileDependencyArguments";
import { Question } from "yeoman-generator";
import { InputTypeEnum } from "../../YeomanQuestions";
import { ResolveFileDependencyMessages } from "../ResolveFileDependencyMessages";
import S from "string";

export class AskWhetherPathIsCorrect extends ResolveFileDependencyProcessor {
    public static readonly Instance = new AskWhetherPathIsCorrect();

    public async SafeExecute(args: ResolveFileDependencyArguments): Promise<void> {
        const optionName = args.GetOptionWithId("-select-file");
        let question: Question = undefined;

        if (args.guesses.length === 1) {
            question = {
                type: InputTypeEnum.Confirm,
                name: optionName,
                message: S(ResolveFileDependencyMessages.ConfirmFile)
                    .template({ file: args.guesses[0] }).s,
                default: false
            };
        } else {
            question = {
                type: InputTypeEnum.List,
                choices: args.guesses,
                name: optionName,
                message: ResolveFileDependencyMessages.ChooseFile
            };
        }

        let answers = await args.yeomanGenerator.prompt(question);
        let answer = answers[optionName];

        let message =
            args.guesses.length > 1
                ? S(ResolveFileDependencyMessages.UserSelected)
                    .template({ options: args.guesses, file: answer }).s
                : S(ResolveFileDependencyMessages.UserConfirmed)
                    .template({ file: args.guesses[0] }).s

        if (args.guesses.length === 1) {
            if (answer) {
                args.SetResultWithInformation(args.guesses[0], message);
            }
            else {
                args.ResetResultWithInformation(S(ResolveFileDependencyMessages.FileWillNotBeCreated)
                    .template({ path: args.guesses[0] }).s);
            }
        } else {
            args.SetResultWithInformation(answer, message);
        }
    }

    public SafeCondition(args: ResolveFileDependencyArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ResolveFileDependencyArguments): boolean {
        let safeCondition = args.guesses.length > 0 && !args.ResultIsSet();
        return safeCondition;
    }
}
