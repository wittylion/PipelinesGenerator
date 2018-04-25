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

        question = {
            type: InputTypeEnum.Confirm,
            name: optionName,
            message: S(ResolveFileDependencyMessages.ConfirmFile)
                .template({ file: args.guesses[0] }).s,
            default: false
        };

        let answers = await args.yeomanGenerator.prompt(question);
        let answer = answers[optionName];

        if (answer) {
            let message = S(ResolveFileDependencyMessages.UserConfirmed)
                .template({ file: args.guesses[0] }).s;
            args.SetResultWithInformation(args.guesses[0], message);
        }
        else {
            args.ResetResultWithInformation(S(ResolveFileDependencyMessages.FileWillNotBeCreated)
                .template({ path: args.guesses[0] }).s);
        }
    }

    public SafeCondition(args: ResolveFileDependencyArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ResolveFileDependencyArguments): boolean {
        let safeCondition = args.guesses.length === 1 && !args.ResultIsSet();
        return safeCondition;
    }
}
