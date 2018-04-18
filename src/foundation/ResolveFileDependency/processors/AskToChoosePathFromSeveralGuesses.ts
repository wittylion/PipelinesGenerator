import { ResolveFileDependencyProcessor } from "../ResolveFileDependencyProcessor";
import { ResolveFileDependencyArguments } from "../ResolveFileDependencyArguments";
import { Question } from "yeoman-generator";
import { InputTypeEnum } from "../../YeomanQuestions";
import { ResolveFileDependencyMessages } from "../ResolveFileDependencyMessages";
import S from "string";

export class AskToChoosePathFromSeveralGuesses extends ResolveFileDependencyProcessor {
    public static readonly Instance = new AskToChoosePathFromSeveralGuesses();

    public async SafeExecute(args: ResolveFileDependencyArguments): Promise<void> {
        const optionName = args.GetOptionWithId("-select-file");
        let question: Question = undefined;

        question = {
            type: InputTypeEnum.List,
            choices: args.guesses,
            name: optionName,
            message: ResolveFileDependencyMessages.ChooseFile
        };

        let answers = await args.yeomanGenerator.prompt(question);
        let answer = answers[optionName];

        let message = S(ResolveFileDependencyMessages.UserSelected)
            .template({ options: args.guesses, file: answer }).s

        args.SetResultWithInformation(answer, message);

    }

    public SafeCondition(args: ResolveFileDependencyArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ResolveFileDependencyArguments): boolean {
        let safeCondition = args.guesses.length > 1 && !args.ResultIsSet();
        return safeCondition;
    }
}
